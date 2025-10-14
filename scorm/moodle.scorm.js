const scorm = window.pipwerks.SCORM;
const baseURL = "https://chatmd.forge.apps.education.fr/";

let chatbotUrl;
let sessionStartTime;

function formatScormTime(totalSeconds) {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	// On s’assure d’avoir toujours deux chiffres
	return [
		String(hours).padStart(2, "0"),
		String(minutes).padStart(2, "0"),
		String(seconds).padStart(2, "0"),
	].join(":");
}

document.addEventListener("DOMContentLoaded", () => {
	// Style de base
	const style = document.createElement("style");
	style.innerHTML =
		"body, html { margin: 0px; padding: 0px; height: 100%; overflow: auto; }";
	document.head.appendChild(style);

	// Message de chargement
	const loadingMessage = document.createElement("div");
	loadingMessage.innerHTML = "Chargement en cours...";
	document.body.appendChild(loadingMessage);

	// Initialisation SCORM
	scorm.init();
	sessionStartTime = new Date();

	// Création de l’iframe avec le chatbot
	const iframe = document.createElement("iframe");
	chatbotUrl = baseURL + location.hash;
	iframe.src = chatbotUrl;
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("width", "100%");
	iframe.setAttribute("height", "100%");
	iframe.style.display = "none";
	iframe.onload = function () {
		loadingMessage.style.display = "none";
		iframe.style.display = "block";
	};
	document.body.appendChild(iframe);
});

// Gestion de la fermeture ou du reload de la page
window.addEventListener("beforeunload", () => {
	scorm.quit();
});

window.addEventListener("message", (event) => {
	if (
		typeof event.data.source !== "undefined" &&
		event.data.source == "chatmd"
	) {
		// Enregistrement du score
		if (event.data.score && event.data.scoreMax) {
			const score = event.data.score;
			const scoreMax = event.data.scoreMax;
			const calculatedScore = Math.round((100 * score) / scoreMax);
			scorm.status("set", "completed");
			scorm.set("cmi.core.score.raw", calculatedScore);
			scorm.set("cmi.core.score.min", "0");
			scorm.set("cmi.core.score.max", scoreMax.toString());
		}

		// Enregistrement du statut de réussite
		if (typeof event.data.success === "boolean") {
			successStatus = event.data.success ? "passed" : "failed";
			if (event.data.success) {
				scorm.status("set", "passed");
			} else {
				scorm.status("set", "failed");
			}
		}

		// Enregistrement d'un commentaire
		if (event.data.comment) {
			scorm.set("cmi.comments", event.data.comment);
		}

		// Enregistrement de l'historique des actions
		if (event.data.actionsHistory) {
			const actionsHistory = event.data.actionsHistory;
			// Récupération de l'historique des actions (séparées par "|")
			const actionsHistoryArray = actionsHistory.split("|");
			// Pour chaque action dans l'historique, on ajoute un enregistrement de l'interaction de l'apprenant avec le chatbot
			for (let index = 0; index < actionsHistoryArray.length; index++) {
				const action = actionsHistoryArray[index];
				scorm.set(`cmi.interactions_${index}.student_response`, action);
			}
		}

		// Enregistrement de l'URL du chatbot
		scorm.set("cmi.suspend_data", chatbotUrl);

		// Enregistrement du temps passé sur le chatbot
		const sessionEndTime = new Date();
		const elapsedSeconds = Math.floor(
			(sessionEndTime - sessionStartTime) / 1000
		);
		const scormTime = formatScormTime(elapsedSeconds);
		scorm.set("cmi.core.session_time", scormTime);

		scorm.save();
	}
});

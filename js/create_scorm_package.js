const createScormButton = document.getElementById("createScormPackage");

createScormButton.addEventListener("click", () => {
	const urlChatbot = document.getElementById("urlChatbot").value
	createScormPackage(urlChatbot)
})

async function createScormPackage(urlChatbot) {
    try {
        // On crée une nouvelle instance de JSZip
        const zip = new window.JSZip();

        // Liste des fichiers à inclure dans le SCORM
        const files = [
            "index.html",
            "moodle.scorm.js",
            "SCORM_API_wrapper.js",
            "imsmanifest.xml"
        ];

        // Charger et ajouter chaque fichier au zip
        for (const fileName of files) {
            const response = await fetch(`scorm/${fileName}`);
            if (!response.ok) throw new Error(`Erreur de chargement du fichier : ${fileName}`);
            let content = await response.text();

            // Remplacement de URLCHATBOT dans imsmanifest.xml par la source du chatbot
            if (fileName === "imsmanifest.xml") {
                content = content.replace(/URLCHATBOT/g, urlChatbot);
            }

            zip.file(fileName, content);
        }

        // Génération du fichier ZIP
        const blob = await zip.generateAsync({ type: "blob" });

        // Téléchargement automatique du fichier
        window.saveAs(blob, "scorm_package.zip"); // Nécessite FileSaver.js
    } catch (err) {
        console.error("❌ Erreur lors de la création du package SCORM :", err);
    }
}

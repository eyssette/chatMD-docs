const tds = document.querySelectorAll("td");
const regexInteractions = /cmi\.interactions_\d+\.student_response/;
const informationForUrl = "cmi.suspend_data"
const historyActionsArray = [];
let urlChatbot = "";

tds.forEach((td, i) => {
	const tdValue = td.textContent.trim();
	const isInteraction = regexInteractions.test(tdValue)
	const isUrlChatbot = tdValue.includes(informationForUrl)
  if (isInteraction) {
    const nextTd = tds[i + 1];
    if (nextTd) historyActionsArray.push(nextTd.textContent.trim());
  }
  if(isUrlChatbot) {
	const nextTd = tds[i + 1];
	if (nextTd) urlChatbot = nextTd.textContent.trim();
  }
});

const historyActions = historyActionsArray.join("|")
urlChatbot = historyActions ? urlChatbot + "?actions=" + historyActions : urlChatbot;

if(urlChatbot) {
	window.open(urlChatbot);
}
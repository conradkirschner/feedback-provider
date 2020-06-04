import overlay from "./overlay";
import sendReport from "../util/sendReport";
import reportVideo from "./reportVideo";
import reportPicture from "./reportPicture";

const feedbackForm = document.createElement('div');


/**
 * Form Elements
 */
const form = document.createElement('form');
const headingElement1 = document.createElement('h1');
const headingElement2 = document.createElement('h2');
const textAreaElement = document.createElement('textarea');
const breakline = document.createElement('br');
const submit = document.createElement('button');
/**
 * Headlines
 */
headingElement1.style.margin = "0"
headingElement1.innerText = "Danke!"

headingElement2.innerText = "Steps to reproduce:"
headingElement2.style.margin = "0"

/**
 * textAreaElement
 */
textAreaElement.style.width = "80vw";
textAreaElement.style.height = "50vh";

/**
 * Submit
 */
submit.type = "submit";
submit.innerText = "Absenden";
submit.style.border = "1px solid black";
submit.style.margin = "10px";
submit.style.height = "50px";
submit.style.width = "150px";
/**
 * Form
 */
form.style.display = "block";
form.action = "https://localhost:1234/report";
form.method = "POST";
form.autocomplete = false;
form.onsubmit = (event) => {

    const userFeedbackText = textAreaElement.value;

    if (reportPicture.result !== null) {
        sendReport(userFeedbackText, reportPicture.result.toDataURL());
    }
    if (reportVideo.result !== null) {
        sendReport(userFeedbackText, reportVideo.result);
    }
    textAreaElement.value = "";
    overlay.close();
    return false;
}

form.appendChild(document.createElement("hr"));
form.appendChild(headingElement1);
form.appendChild(headingElement2);
form.appendChild(textAreaElement);
form.appendChild(breakline);
form.appendChild(submit);
feedbackForm.appendChild(form);
feedbackForm.style.margin = "0 auto";
feedbackForm.style.width = "100%";
feedbackForm.style.height = "100%";
feedbackForm.style.backgroundColor = "white";
// feedbackForm.style.display = "flex";
// feedbackForm.style.justifyContent = "center";
// feedbackForm.style.alignItems = "center";

export default feedbackForm;
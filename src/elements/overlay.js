import feedbackForm from "./feedbackForm";
import reportPreview from "./reportPreview";


const overlay = document.createElement('Overlay');
const close = document.createElement('button');
close.innerText = "Close / Abbruch";
close.style.width = "100%";
close.style.height = "100px";
close.style.fontSize = "19px";
overlay.style.position = "fixed";
overlay.style.left = "0";
overlay.style.top = "0";
overlay.style.zIndex = "2147483647";
overlay.style.height = "100vh";
overlay.style.width = "100vw";
overlay.style.overflow = "scroll";
overlay.style.backgroundColor = "white";
/**
 * report preview
 */

feedbackForm.prepend(document.createElement("br"));

feedbackForm.prepend(reportPreview);
feedbackForm.prepend(document.createElement("br"));
feedbackForm.prepend(close);
/**
 * feedback form
 */
overlay.appendChild(feedbackForm);

overlay.close = () => {
    overlay.style.display = "none";
};
overlay.open = () => {
    overlay.style.display = "initial";
};
export default overlay;
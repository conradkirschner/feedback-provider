import feedbackForm from "./feedbackForm";


const overlay = document.createElement('Overlay');

overlay.style.position = "fixed";
overlay.style.left = "0";
overlay.style.top = "0";
overlay.style.zIndex = "2147483647";
overlay.style.height = "100vh";
overlay.style.width = "100vw";
overlay.style.backgroundColor = "white";
overlay.appendChild(feedbackForm);

overlay.close = () => {
    overlay.style.display = "none";
};
overlay.open = () => {
    overlay.style.display = "initial";
};
export default overlay;
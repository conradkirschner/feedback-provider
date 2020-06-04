import html2canvas from 'html2canvas';
import icon from '../icons/photo.svg';
import overlay from "./overlay";
import reportPreview from "./reportPreview";

const reportPicture = document.createElement('button');
reportPicture.result = null;
reportPicture.style.margin = "5px";
reportPicture.style.width = "70px";
reportPicture.style.height = "90px";
reportPicture.style.backgroundColor = "transparent";
reportPicture.style.fill = "red";
reportPicture.innerHTML = icon;

/**
 * Record a screenshot
 */
const doScreenshot = () => {
    html2canvas(document.body).then(function(canvas) {
        reportPicture.result = canvas;
        overlay.open();
        reportPreview.picture(canvas);
    });
}
reportPicture.ontouchend = doScreenshot;
reportPicture.onclick = doScreenshot;

export default reportPicture;


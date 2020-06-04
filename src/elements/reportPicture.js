import html2canvas from 'html2canvas';
import icon from '../icons/photo.svg';

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
reportPicture.onclick = () => {
    html2canvas(document.body).then(function(canvas) {
        reportPicture.result = canvas;
    });
}

export default reportPicture;


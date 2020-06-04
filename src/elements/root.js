import pictureButton from './reportPicture';
import videoButton from './reportVideo';
import overlay from "./overlay";
export const feedbackProvider = document.createElement('FeedbackProvider');

feedbackProvider.style.position = "fixed";
feedbackProvider.style.top = "35%";
feedbackProvider.style.left = "0";
feedbackProvider.style.zIndex = "2147483644";
feedbackProvider.style.width = "80px";
feedbackProvider.style.height = "200px";
feedbackProvider.style.padding = "20px";
feedbackProvider.style.backgroundColor = "lightgray";
overlay.close();
feedbackProvider.appendChild(pictureButton);
document.body.appendChild(overlay);
feedbackProvider.appendChild(videoButton);

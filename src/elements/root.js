import pictureButton from './reportPicture';
import videoButton from './reportVideo';

export const feedbackProvider = document.createElement('FeedbackProvider');

feedbackProvider.style.position = "fixed";
feedbackProvider.style.top = "35%";
feedbackProvider.style.left = "0";
feedbackProvider.style.zIndex = "10000000000000";
feedbackProvider.style.width = "80px";
feedbackProvider.style.height = "200px";
feedbackProvider.style.padding = "20px";
feedbackProvider.style.backgroundColor = "lightgray";

feedbackProvider.appendChild(pictureButton);
feedbackProvider.appendChild(videoButton);


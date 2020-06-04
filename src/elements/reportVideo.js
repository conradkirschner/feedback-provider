import icon from "../icons/video.svg";
import iconStop from "../icons/video-pause.svg";
import overlay from "./overlay";
import reportPicture from "./reportPicture";
import reportPreview from "./reportPreview";

const reportVideo = document.createElement('button');

reportVideo.result = null;
reportVideo.style.marginLeft = "5px";
reportVideo.style.marginRight = "5px";
reportVideo.style.width = "70px";
reportVideo.style.height = "90px";
reportVideo.style.backgroundColor = "transparent";
reportVideo.style.fill = "red";
reportVideo.innerHTML = icon;

/**
 * record a video
 */
reportVideo.isRecording = false;

const start = reportVideo;
const stop = reportVideo;
let recorder, stream;
reportVideo.onclick = () => {

    async function startRecording() {

        stream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" }
        });
        recorder = new MediaRecorder(stream);

        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = e => {
            const completeBlob = new Blob(chunks, { type: chunks[0].type });
            reportVideo.result = URL.createObjectURL(completeBlob);
            overlay.open();
            reportPreview.video.refresh(URL.createObjectURL(completeBlob));


        };
        stop.addEventListener("click", () => {
            recorder.stop();
            stream.getVideoTracks()[0].stop();
            reportPicture.style.display = "initial";
            reportVideo.innerHTML = icon;
            reportVideo.isRecording = false;
        });
        recorder.start();
    }

    start.addEventListener("click", () => {
        if (reportVideo.isRecording) return ;
        reportVideo.isRecording = true;
        reportPicture.style.display = "none";
        reportVideo.innerHTML = iconStop;
        startRecording();
    });


}
export default reportVideo;


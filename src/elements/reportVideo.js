import icon from "../icons/video.svg";
import overlay from "./overlay";

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
reportVideo.onclick = () => {
    const start = reportVideo;
    const stop = reportVideo;
    const video = document.querySelector("video");
    let recorder, stream;

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
        };

        recorder.start();
    }

    start.addEventListener("click", () => {
        start.setAttribute("disabled", true);
        stop.removeAttribute("disabled");

        startRecording();
    });

    stop.addEventListener("click", () => {
        stop.setAttribute("disabled", true);
        start.removeAttribute("disabled");

        recorder.stop();
        stream.getVideoTracks()[0].stop();
    });
}
export default reportVideo;


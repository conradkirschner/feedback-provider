const reportPreview = document.createElement('ReportPreview');
const videoReport = document.createElement("video");
videoReport.refresh  = (result) => {
    videoReport.src = result;
}
reportPreview.video = videoReport;

reportPreview.picture = (picture) => {reportPreview.appendChild(picture);};
reportPreview.appendChild(videoReport);

export default reportPreview;
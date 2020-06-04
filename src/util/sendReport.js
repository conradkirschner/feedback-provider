const sendReport = (text, data) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", window.config.url + "/report", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`userreport=${text}&attachment=${data}`);
}
export default sendReport;
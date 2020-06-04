const express = require("express");
const app = express();
const sendmail = require('./services/email');
const bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.listen(3000, () => {
    app.get("/", (req, res, next) => {
        console.log("requested");
        res.sendfile(__dirname + '/static/dist/index.html');
    });
    app.get("/assets/main.js", (req, res, next) => {
        res.sendfile(__dirname + '/static/dist/main.js');
    });
    app.post("/report", (req, res, next) => {
        sendmail(req.body.userreport, req.body.attachment, req.body.type)
        res.json(["ok"]);
    });

    /**
     * Use url as user identifier,
     * set the parameter from config provider
     * create a cached file and serve it
     */
    app.get("/script/*.js", (req, res, next) => {

        res.sendfile(__dirname + '/cache/main.js');
    });
});
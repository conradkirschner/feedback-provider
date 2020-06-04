var express = require("express");
var app = express();
app.listen(3000, () => {
    app.get("/", (req, res, next) => {
        res.json(["Tony","Lisa","Michael","Ginger","Food"]);
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
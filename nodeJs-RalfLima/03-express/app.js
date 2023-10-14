const express = require("express");
const app = express();
const port = 3457;

app.get("/", (req, res) => {
    res.send("Hell World!");
}).listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

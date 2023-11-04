import express from "express";
import fetch from "node-fetch";

// const express = require("express");
// const fetch = require("node-fetch");

const app = express();

app.get("/", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((users) => users.json())
        .then((users) => console.log(users));
    // .then((users) => console.table(users));

    res.end();
});

app.listen(3000);

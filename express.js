const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/login", (req, res) => {
    const { name } = req.query;
    if (name) {
        // Set a cookie with the user's name
        res.cookie("name", name);
        res.send(`Logged in as ${name}. Cookie set.`);
    } else {
        res.send("Please provide a name parameter.");
    }
});

app.get("/hello", (req, res) => {
    const userName = req.cookies.name;
    if (userName) {
        res.send(`Welcome ${userName}!`);
    } else {
        res.send("Please log in first.");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Express server is listening on port ${port}.`);
});

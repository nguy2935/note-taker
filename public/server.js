// require dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

// express app set-up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App API is live on port ${PORT}.`);
});
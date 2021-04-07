const PORT = process.env.PORT || 8081;

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/static"));
app.listen(PORT);
const PORT = process.env.PORT || 8081;

const express = require("express");
const fs = require('fs');
const app = express();

app.get('/api/history/all', async function(req, res) {
    req.send('OK');
});

app.use(express.static(__dirname + "/static"));
app.listen(PORT);
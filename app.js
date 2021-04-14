const express = require("express"); //загружаем модуль
const fs = require('fs');
const app = express(); //создаем объект

app.use(express.static(__dirname + "/static"));

app.get("/history", function(request, response){
    var val = fs.readFileSync(__dirname + "/history.txt", "utf-8");
    //console.log("!!!!");
    var str = "", res = "<!DOCTYPE html>\n" +
        "  <html>\n" +
        "  <head>\n" +
        "      <title>История</title>\n" +
        "      <meta charset=\"utf-8\" />\n" +
        "  </head>\n" +
        "  <body>\n";

    var i = 0;
    while (i < val.length) {
        while (i < val.length && val[i] != ' ') {
            str += val[i];
            i++;
        }
        if (str != "") res = res + "<pre>" + str + "</pre>\n";
        str = "";
        console.log(str);
        i++;
    }
    res = res + "  </body>\n" + "  <html>";
    response.set('Content-Type', 'text/html');
    response.send(Buffer.from(res));
});

const jsonParser = express.json();
app.post("/hist", jsonParser, function(request, response){
    var z = request.body;
    if (!z) return response.sendStatus(400);
    //console.log(z.value);
    fs.appendFileSync(__dirname + "/history.txt", z.value + "\n");
    return response.sendStatus(200);
});

app.listen(8081);
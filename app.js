const PORT = process.env.PORT || 8081; //прослушивание порта, порт по умолчанию - 8081

const express = require("express"); //загружаем модуль
//const fs = require('fs');
const app = express(); //создаем объект

app.use(express.static(__dirname + "/static"));
app.listen(PORT);
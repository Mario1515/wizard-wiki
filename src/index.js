const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const { PORT, DB_URL } = require("./constants");
const routes = require("./router");


//init
const app = express();

//express configurations
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false}));

// handlebars configuration
app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views");

//DB CONNECT
mongoose.connect("mongodb://127.0.0.1:27017/wizard-wiki")
.then(() => console.log("DB Connected Succesfully"))
.catch(error => console.log("DB Error: " + error));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on ${PORT} ...`));
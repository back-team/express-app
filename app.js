require("dotenv/config");
const express = require("express");
const app = express();
const Stagiaireroute = require("./routes/stagiaire.route")
const db = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/stagiare" , Stagiaireroute);

db.connect();
app.listen(process.env.APP_PORT, () => console.log("app working on : " + process.env.APP_PORT))
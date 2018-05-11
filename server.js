const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");
const getAllQuotes = require ("./handlers/getAllQuotes.js");
const getParamQuotes = require ("./handlers/getParamQuotes.js");



//ROUTE TO PARAM SEARCH
app.get("/quotes/parameters", getParamQuotes);

//ROUTE TO GET ALL QUOTES
app.get("/quotes", getAllQuotes);






  app.listen(port, function () {
    console.log("Server listening on port:" + port);
  });

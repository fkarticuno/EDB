var express = require("express");
var expHbars = require("express-handlebars");
var path = require("path");
var mysql = require("mysql");
var inquirer =require("inquirer");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var PORT2 = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
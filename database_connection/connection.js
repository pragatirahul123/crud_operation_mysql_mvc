const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(express.json())
const port = 3079

var Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Pragati@12",
    database : "javapoint"
});

var sql = "create table if not  exists a(id int, name  varchar(233), section varchar(55))";
Connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("create table")
            // result.send("table creted")
})

module.exports = Connection
    
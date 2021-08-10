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
    database : "practice"
});


app.post('/createTable',(req,res)=>{
    Connection.connect((err,result)=>{
        if(err)throw err
        console.log("coonnection success")
        var sql = "create table a(id int, name  varchar(233), section varchar(55))";
        Connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("create table")
        })
    })

})






app.post('/create', (req, res) => {
    let data={ id:req.body.id,
        name:req.body.name,
        section:req.body.section};

        var sql = "INSERT INTO a SET ?";
        let query=Connection.query(sql,data,(err,result)=>{
            if(err) throw err;
            
            console.log("data insertd")
            

            res.send("data inserted")
        })
    })
app.get('/read',(req,res)=> {
    var sql = "SELECT * FROM a";
    var query = Connection.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send(result)
    })
})
    
  

app.put('/update/:id', (req, res) => {


    let sql="UPDATE a SET name='" +req.body.name+ " ',section='"+req.body.section+ "'WHERE id="+req.params.id;
    let quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("successfully")
        res.send("update suceefully")

    })
        
})

app.delete('/delete/:id',(req,res) =>{
    var sql = "DELETE FROM a WHERE id =" +req.params.id;
    var quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("delete")
        res.send("delete data")
    });
});

    



app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
})


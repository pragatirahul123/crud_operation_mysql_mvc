
const Connection = require("../database_connection/connection")

module.exports.post_data=(req,res)=>{

    let data={ id:req.body.id,
        name:req.body.name,
        section:req.body.section};

        var sql = "INSERT INTO a SET ?";
        let query=Connection.query(sql,data,(err,result)=>{
            if(err) throw err;
            
            console.log("data insertd")
            

            res.send("data inserted")
        })
    }
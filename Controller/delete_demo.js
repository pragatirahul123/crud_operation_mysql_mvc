const Connection = require("../database_connection/connection")

module.exports.delete_data =(req,res)=>{
    var sql = "DELETE FROM a WHERE id =" +req.params.id;
    var quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("delete")
        res.send("delete data")
    });
}



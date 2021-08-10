const Connection = require("../database_connection/connection")


module.exports.get_data =(req,res)=>{
    var sql = "SELECT * FROM a";
    var query = Connection.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send(result)
    })

}

    
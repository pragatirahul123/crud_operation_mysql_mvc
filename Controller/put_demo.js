const Connection = require("../database_connection/connection")
module.exports.update_data=(req,res)=>{
    let sql="UPDATE a SET name='" +req.body.name+ " ',section='"+req.body.section+ "'WHERE id="+req.params.id;
    let quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("successfully")
        res.send("update suceefully")


})




        
}
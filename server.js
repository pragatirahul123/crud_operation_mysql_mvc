const express=require('express')
const app=express()
app.use(express.json())



app.use('',require('./router/index'))

app.listen(6793,()=>{
    console.log(`SERVER IS RUNNING AT PORT 6793`);
})

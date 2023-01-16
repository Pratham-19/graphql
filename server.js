const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const schema = require("./schema/schema")

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Alive"
    })
})
app.listen(port,()=>{
    console.log("Listening on port",port);
})
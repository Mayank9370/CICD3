import express from "express";

const app = express();

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.json({message : 'App is running...'})
})

app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
})
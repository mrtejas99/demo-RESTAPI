const express=require('express')
const app=express()

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://demo:8407975073@demo.wr2as.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log('connected')).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(5000); 
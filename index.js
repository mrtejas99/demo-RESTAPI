const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const { User }=require('./models/user')
const config= require('./config/key')

//only for supressing warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true );

mongoose.connect(config.mongoURI)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/api/users/register',(req,res)=>{
    const user=new User(req.body)
    user.save((err,userData)=>{
        if(err) 
            return res.json({success:false,err})
        return res.status(200).json({success:true})
    })
})

app.get('/',(req,res)=>{
    return res.status(200).json({success:true})
})

app.listen(5000)
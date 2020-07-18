const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')

const { User }=require('./models/User')
const { auth }=require('./middleware/auth')
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

app.post('/api/user/register',(req,res)=>{
    const user=new User(req.body)

    user.save((err,doc)=>{
        if(err) 
            return res.json({registerSuccess:false,err})
        return res.status(200).json({success:true,userData:doc})
    })
})

app.get('/',(req,res)=>{
    return res.status(200).json({success:true})
})

app.get('/api/user/auth',auth,(req,res)=>{
    res.status(200).json({
        _id:req._id, 
        role:req.user.role,
        name:req.user.name,
        email:req.user.email, 
        isAuth:true
    })
})

app.post("/api/user/login", (req, res) => {
  //check  email
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user)
            return res.json({loginSuccess:false, message:"Authentication failed. email not found"})

    //check pass
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch)
                return res.json({loginSuccess:false, message:"Authentication failed. Incorrect password"})
        })

    //generate token
        user.generateToken((err,user)=>{
            if(err) return res.status(400).send({err})
            res.cookie("x_auth",user.token).status(200).json({loginSuccess:true})
        })
    })
});

app.get("/api/user/logout",auth, (req, res) => {
  User.findByIdAndUpdate({_id:req.user._id},{token:""},(err,doc)=>{
      if(err) return res.json({success:false, err})
      return res.status(200).send({logoutSuccess:true})
  })
});


app.listen(5000,()=>{
    console.log('server running on port 5000')
})
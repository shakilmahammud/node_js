const express = require('express')
const morgan = require('morgan')
const router = require('./routes/router')
const app = express();
const PORT = process.env.PORT || 8000

// app.use(express.json())
const customMiddleware = (req,res,next)=>{
    console.log('middleware work')
    next()
}
app.use(morgan('dev'))
app.use('/user',router)
app.get('/',(req,res)=>{
    res.json({
        message:'hello'
    })
})
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT} `)
})

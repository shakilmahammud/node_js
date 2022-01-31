const express = require('express')
const router = express.Router()


router.get('/login',(req,res)=>{
    res.send('login page')
})
router.post('/login',(req,res)=>{
    res.send('put page')
})

router.put('/login',(req,res)=>{
    res.send('update page')
})
router.delete('/login',(req,res)=>{
    res.send('delete page')
})
router.get('/login',(req,res)=>{
    res.send('login page')
})
router.post('/login',(req,res)=>{
    res.send('put page')
})

router.put('/login',(req,res)=>{
    res.send('update page')
})
router.delete('/login',(req,res)=>{
    res.send('delete page')
})

router.post('/user',(req,res)=>{
    res.send('update page')
})
router.get('/user',(req,res)=>{
    res.send('update page')
})
router.put('/user',(req,res)=>{
    res.send('update page')
})



module.exports = router
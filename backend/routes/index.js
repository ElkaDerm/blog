
const router= require('express').Router();


router.get('/index', (req, res) =>{

    res.send('index router')
})


module.exports=router
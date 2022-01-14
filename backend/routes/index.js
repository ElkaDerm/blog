
const router= require('express').Router();


router.get('/index', (req, res) =>{
   console.log('from index backend')
   
    res.send('from router /index')
    
})


module.exports=router
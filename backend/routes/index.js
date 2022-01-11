
const router= require('express').Router();


router.get('/', (req, res) =>{
   console.log('from index backend')
   
    res.json('OK')
    
})


module.exports=router
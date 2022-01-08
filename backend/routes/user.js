const router= require('express').Router();


router.get('/', (req , res) =>{

    res.send('its from user router')
})

module.exports= router
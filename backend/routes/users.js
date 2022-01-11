const router= require('express').Router();

const User= require('../models/User.js')


router.get('/', (req , res) =>{

    res.json([{id:1}])

})

router.post('/sing_in', async (req, res, next) => {
console.log ('from backend /users/sing_in');
console.log (req.body)
 const username= req.body.username;
 const password= req.body.password;

const user= await User.findOne({username,password})

    if (!user) {
        return res.status(404).send()
    }
    res.status(204).send()
})

module.exports= router
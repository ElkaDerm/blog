const router= require('express').Router();
const bcrypt= require('bcrypt')
const User= require('../models/User.js')


router.get('/', (req , res) =>{

    res.json([{id:1}])

})

router.post('/regist',async  (req,res,next) => {
    console.log('from backend /users/register')
    console.log (req.body)
    let username= req.body.username;
    let password= req.body.password;
    const hashedPass= await bcrypt.hash(password,10)
    const newUser= {username, password:hashedPass}
    console.log (newUser)

    await User.create(newUser)
   

})


router.post('/sing_in', async (req, res, next) => {
console.log ('from backend /users/sing_in');
console.log (req.body)
 const username= req.body.username;
 const password= req.body.password;

const user= await User.findOne({username})

    if (!user) {
        return res.status(404).send()
    }

    const passwordMatch= await bcrypt.compare(password, user.password);

    if (!passwordMatch)  {
        return res.status(401).send()
    }
    res.status(204).send()
})


module.exports= router
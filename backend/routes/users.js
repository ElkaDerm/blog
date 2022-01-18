const router = require('express').Router();
const bcrypt = require('bcrypt')
const User = require('../models/User.js')


router.get('/', async (req, res) => {



    res.json([{ id: 1 }])

})

router.post('/regist', async (req, res, next) => {
    console.log('from backend /users/register')

    let username = req.body.username;
    let password = req.body.password;

    const hashedPass = await bcrypt.hash(password, 10)
    const newUser = { username, password: hashedPass }

    await User.create(newUser);

    //TODO: direct login functionality


})


router.post('/sing_in', async (req, res, next) => {
    console.log('from backend /users/sing_in');
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username })
    if (!user) {
        return res.status(404).send()
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).send()
    }
    res.locals._id=user._id
    console.log(user)
    res.status(204).send()

    
})


module.exports = router
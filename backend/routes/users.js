const router = require('express').Router();
const bcrypt = require('bcrypt')
const User = require('../models/User.js')


router.get('/', async (req, res) => {

    res.json([{ id: 1 }])

})

router.post('/register', async (req, res) => {
    console.log('from backend /users/register')

    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirmation=req.body.passwordConfirmation;

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPass };


    const user= await User.create(newUser);
    
    res.json(user);


})


router.post('/sign_in', async (req, res) => {
    console.log('from backend /users/sign_in');
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username })
    if (!user) {
        return res.status(404).send();
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).send('Passwords do not much')
    }
    console.log(user)
    res.json(user)


})

router.get('/logout', async (req, res) => {
    console.log(req.params);

})


module.exports = router
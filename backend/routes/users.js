const router= require('express').Router();


router.get('/', (req , res) =>{

    res.json([{id:1}])

})

router.post('/sing_in', (req, res) => {
console.log ('from backend /users/sing_in');
console.log (req.body)
    res.status(204).send()
})

module.exports= router
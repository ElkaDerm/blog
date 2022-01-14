const router= require('express').Router();
const Post= require('../models/Post.js')



router.get('/', (req, res) => {
    console.log('from /posts...')
    res.send('from router /posts')
})


module.exports=router
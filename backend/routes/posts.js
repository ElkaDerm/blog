const router= require('express').Router();
const Post= require('../models/Post.js')



router.get('/', async (req, res) => {
    console.log('from /posts...')

    
   const allPosts= await Post.find()
   console.log ('send all posts....')
    res.json(allPosts)
})

router.post('/create',async (req, res) =>{
    console.log(req.body)

    //TODO: save the post in DB
   const title= req.body.title;
   const textBody= req.body.postText
   const owner= req.body.owner
    const newPost={title, textBody, owner}
    await Post.create(newPost)
})


module.exports=router
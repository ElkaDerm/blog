const router = require('express').Router({mergeParams:true});
const Post = require('../models/Post.js')



router.get('/', async (req, res) => {
    console.log('from /posts...')


    const allPosts = await Post.find({}).populate('owner')

    console.log(allPosts)
    console.log('send all posts....')
    res.json(allPosts)
})

router.post('/create', async (req, res) => {
    console.log(req.body)

    //TODO: save the post in DB
    const title = req.body.title;
    const textBody = req.body.postText
    const owner = req.body.owner
    const newPost = { title, textBody, owner }
    await Post.create(newPost)
})

router.get('/:postId', async(req,res) =>  {

    const post = await Post.findById({_id:req.params.postId}).populate('owner');

    res.json(post)
})


module.exports = router
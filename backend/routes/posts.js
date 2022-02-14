const router = require('express').Router({ mergeParams: true });
const Post = require('../models/Post.js')



router.get('/', async (req, res) => {
    
    const allPosts = await Post.find({}).populate('owner');

    res.json(allPosts);
})

router.post('/create', async (req, res) => {
    

    const title = req.body.title;
    const textBody = req.body.postText;
    const owner = req.body.owner;
    const newPost = { title, textBody, owner };
    await Post.create(newPost)
})

router.get('/:postId', async (req, res) => {

    const post = await Post.findById({ _id: req.params.postId }).populate('owner').populate('likeCount');

    res.json(post)
})

router.delete('/delete/:postId', async (req, res) => {

    const postId = req.params.postId;
    
    const response = await Post.findByIdAndDelete(postId);
    
    res.sendStatus(200);
});

router.put('/:postId', async (req, res) => {

    const postId = req.params.postId;
    const title = req.body.title;
    const textBody = req.body.textBody;

    await Post.findByIdAndUpdate(postId, { title, textBody });
    console.log('post is updated');
    res.sendStatus(200);
})

router.patch('/:postId', async (req, res) => {
    
    const post= await Post.findById({_id:req.params.postId})
    const userId= req.body.userId;
    post.likeCount.push(userId);
    await post.save();
    res.sendStatus(200);
})

router.get('/profile/:userId', async (req, res) => {
    const userId= req.params.userId;

    const posts= await Post.find().where({owner:userId}).populate('owner');

    res.json(posts);
})


module.exports = router
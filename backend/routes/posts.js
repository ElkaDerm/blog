const router = require('express').Router({ mergeParams: true });
const Post = require('../models/Post.js')



router.get('/', async (req, res) => {
    try {

        const allPosts = await Post.find({}).populate('owner');
        res.json(allPosts);
    } catch (error) {
        res.status(401).json({ error: 'No posts in DB' })
    }

})

router.post('/create', async (req, res) => {


    const title = req.body.title;
    const textBody = req.body.postText;
    const owner = req.body.owner;


    const newPost = new Post({ title, textBody, owner });
    try {
        const post = await newPost.save();
        console.log(post)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

router.get('/:postId', async (req, res) => {
    try {

        const post = await Post.findById({ _id: req.params.postId }).populate('owner').populate('likeCount');
        res.status(200).json(post);
    } catch (error) {

        res.status(401).json({ error: 'Post does not exist!' });
    }

})

router.delete('/delete/:postId', async (req, res) => {

    const postId = req.params.postId;
    try {

        const response = await Post.findByIdAndDelete(postId);
        res.status(200).json({message:'Post is deleted from DB'});

    } catch (error) {

        res.status(400).json({ error: 'Post not deleted!' });
    }

});

router.put('/:postId', async (req, res) => {

    const postId = req.params.postId;
    const title = req.body.title;
    const textBody = req.body.textBody;

    const post = await Post.findOne({ _id: postId });
    post.title = title;
    post.textBody = textBody;
    try {

        await post.save()
        console.log(post, 'saved post ...updated')
        res.status(200);

    } catch (error) {

        res.status(400).json({ error: `${error.message}` });

    }


})

router.patch('/:postId', async (req, res) => {
    try {

        const post = await Post.findById({ _id: req.params.postId });

        const userId = req.body.userId;
        post.likeCount.push(userId);
        const likedPost = await post.save();

        res.status(200).json(likedPost);

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Post does not exist!'});

    }

})

router.get('/profile/:userId', async (req, res) => {
    const userId = req.params.userId;

    const posts = await Post.find().where({ owner: userId }).populate('owner');

    res.json(posts);
})


module.exports = router
const mongoose= require('mongoose');

const postSchema= new mongoose.Schema({

    title: String,
    textBody: String,
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Post= mongoose.model('Post', postSchema);

module.exports=Post
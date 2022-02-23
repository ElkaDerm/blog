const mongoose= require('mongoose');

const postSchema= new mongoose.Schema({

    title:{type: String, required:true, minlength:3, maxlength:50},
    textBody: {type:String, required:true, minlength:3, maxlength:500},
    likeCount:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Post= mongoose.model('Post', postSchema);

module.exports=Post
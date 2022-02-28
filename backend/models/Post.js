const mongoose= require('mongoose');

const postSchema= new mongoose.Schema({

    title:{type: String, required:true, minlength:[3,'Title minlength is 3 characters!'], maxlength:[100,'Title maxlength is 100 characters!']},
    textBody: {type:String, required:true, minlength:[3, 'Text minlength is 3 characters!'], maxlength:[15000,'Text maxlength is 15000 characters!']},
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
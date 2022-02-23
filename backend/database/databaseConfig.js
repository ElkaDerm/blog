const mongoose= require('mongoose');

 async function startDB () {

    try {
        await mongoose.connect('mongodb://localhost:27017/blog',{
            useNewUrlParser:true,
            serverSelectionTimeoutMS:5000
        })
        console.log ('Database is connected....');
    } catch (error) {
        console.log (error);
    }
    
}

module.exports=startDB
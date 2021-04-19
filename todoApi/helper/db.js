const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect("mongodb+srv://yusuf:1234@nodejs-blog.691wr.mongodb.net/todoapi?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,});

    mongoose.connection.on('open',()=>{
        console.log('db connected');
    });
    mongoose.connection.on('error',(err)=>{
        console.log("Mongodb Error: ",err);
    });

    mongoose.Promise = global.Promise;
}
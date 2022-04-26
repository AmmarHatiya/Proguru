const mongoose = require('mongoose');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },function(error){
        if(error){
            console.error('Unable to connect to MongoDB: ', error);
        } else{
            console.log('Connected to MongoDB');
        }
    }
);

//create Schema for university table
let schema = mongoose.Schema;

//user Schema that contains username and passwords
let userSchema = new schema({
    username: String,
    email: String,
    password: String,
    hashPassword: String,
},{
    collection: 'users'
});

//student Schema that contains students info
let lessonSchema = new schema({
    userId: String,
    lesson1: String,
},{
    collection: "lesson"
});

//Link the Database with our objects
module.exports.User = mongoose.model('users', userSchema);
module.exports.Student = mongoose.model('lesson', lessonSchema);

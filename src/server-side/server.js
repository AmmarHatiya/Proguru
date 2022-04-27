const { request } = require('express');
const { response } = require('express');
const express = require('express');
const cors = require('cors')
const port = 3000;
const db = require('./mongoose.js');
var bodyParser = require('body-parser')
const bcrypt = require ('bcryptjs');
const e = require('express');

let app = express();

app.use(express.static("public"));
app.use(cors());

function userExists(userToFind){
    return new Promise ((resolve, reject) =>{
        db.User.find({username: userToFind}).then(
            function(results){
                if(results.length >0){
                    console.log(results);
                    resolve (results[0].hashPassword);
                }else{
                    reject ("");
                }
            }
        );
    });
    
};
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//retrieve id based on username
app.post('/', urlencodedParser,function(request, response){
    console.log(request.body.username)
    console.log(request.body.password)
    if (request.body.username == undefined){
        console.log("CANNOT GET")
    } else{
        db.User.find({username: request.body.username}).then( r => {
            console.log("Result:", r);
            response.send(r[0]._id);
            }
        );
    }
});

//retrieve username based on id
app.get('/uid', urlencodedParser,function(request, response){
    console.log(request.body.uid)
    if (request.body.uid == undefined){
        console.log("CANNOT GET")
    } else{
        db.User.find({_id: request.body.uid}).then( r => {
            console.log("Result:", r);
            response.send(r[0].username);
            }
        );
    }
});

app.post('/login', urlencodedParser, function(request, response){
    //Check the login info form database.
    // console.log(request.body);
    let username = request.body.username;
    let password = request.body.password;
    userExists(username).then(hashPswd => {
        //Success
        // console.log(`savedpassword: ${result}`);
        // console.log(`givenpassword: ${password}`);
        if (bcrypt.compareSync(password,hashPswd)){
            response.send("Login successful!");
        }else{
            response.send("Login failed, invalid username or password.");
        }
    }).catch(error => {
        console.log("Nope:" + error)
        response.send("Error in trying to login! Error:" + error);
    });
    
    
});

//register user
app.post('/register', urlencodedParser, function(request, response){
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let hashPassword = bcrypt.hashSync(password);
    let userData = {
        username: username,
        password: password,
        hashPassword: hashPassword,
        email: email
    }
    //.then is for resolve
    userExists(username).then(result =>{
        //User already exist
        response.send("Username already taken").status(403);

    }).catch( error=> { //.catch for reject
        let newUser = new db.User(userData);
        newUser.save(function(error){
            if(error){
                response.send("Unable to save user due to " + error).status(403);
            }else{
                response.send("Register successful");
            }
        });
    });
    
    

});

app.set('port', port);
app.listen(app.get('port'),function(){
    console.log(`Listening on port ${app.get('port')}`);
});

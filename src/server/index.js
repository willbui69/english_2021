var path = require('path')
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const mongo = require('mongodb')
const cookieParser = require('cookie-parser')
dotenv.config();

//Google Authentication
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '177921256407-jfh7lklk7ttmj69a7l98817hvm6ipl92.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

/* Middleware*/
const bodyParser = require('body-parser');
app.use(cookieParser());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', '/Users/mac/Desktop/english-2021/src/client/views');
//Data project endpoint
const projectData = {};

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)


// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('The English app listening on port 8080');
})

//Get user login-credentials
app.post('/postuserlogindata', async(req, res)=>{
    try {
        //Save user credentials in server side
        projectData["userName"] = await req.body.userName;
        projectData["passWord"] = await req.body.passWord;
        console.log(projectData);

        //Check user credentials are valid
        validateUserLogin(projectData["userName", "passWord"])
        .then(()=>{
            //Send response to client side

        })
    }catch(error){
        console.log("error", error);
    }
})

//Get Log in route from google accounts
app.post('/login', (req, res)=>{
    let token = req.body.token;
    console.log(token);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload);
      }
      verify()
      .then(()=>{
        res.cookie('session-token', token);
        res.send('success');
      }).
      catch(console.error);
})

app.get('/startpage', checkAuthenticated, (req, res)=>{
    let user = req.user;
    res.render('startpage.html', {user});
})

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/');
})

function checkAuthenticated(req, res, next){
    let token = req.cookies['session-token'];
    let user = {};
    async function verify(){
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
    .then(()=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        res.redirect('/')
    })
}

//Validate user credientials
const validateUserLogin = async (userName, passWord)=>{
    if(userName == 'fff' && passWord == "12"){
        window.location = "startpage.html";
        return false;
    }else {
        
    }
}
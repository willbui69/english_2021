const express = require('express')
const app = express()
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const mongo = require('mongodb')
dotenv.config();
/* Middleware*/
const bodyParser = require('body-parser');

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

//Validate user credientials
const validateUserLogin = async (userName, passWord)=>{
    if(userName == 'fff' && passWord == "12"){
        window.location = "startpage.html";
        return false;
    }else {
        
    }
}
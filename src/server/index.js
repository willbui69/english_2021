var path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = process.env.PORT || 8080

dotenv.config();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// app.get('/', function (req, res) {
//     res.sendFile('index.html', { root: __dirname });
// })

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });

// designates what port the app will listen to for incoming requests
app.listen(port, function() {
    console.log(`The English app listening on port ${port}`);
})


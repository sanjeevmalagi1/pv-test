const functions 	= require('firebase-functions'),
	  express 		= require('express'),
	  bodyParser 	= require('body-parser'),
	  cors			= require('cors');
  
const app = express();

//Middlewares
app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function (req, res) {
  console.log("Body Of request",req.body);
  res.send(req.body);
})

app.post('/checkHeader', function (req, res) {
  console.log("Heades Of request",req.headers.authkey);
  if(req.headers.authkey == "authKey"){
	res.send("Request successfull");
  }
  else {
	res.send("Header not present");  
  }
  
})

const expressApp = functions.https.onRequest(app);

module.exports = {
  expressApp
}
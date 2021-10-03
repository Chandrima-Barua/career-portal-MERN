const express = require('express');
const app = express();

// const cors = require('cors');
const db = require("./db");

//use cors to allow cross origin resource sharing
const cors = require('cors')({
    origin: 'http://localhost:3000',
});
app.use(cors);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
next();
});


//for file upload
var multer = require('multer');
app.use(multer({dest:'./uploads/'}).any());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = express.Router();


//DB connection check
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
const applicantSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  applicant_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  current_company: { type: String },
  linkedin_url: { type: String },
  other_url: { type: String },
  additional: { type: String },
  gender: { type: String },
  race: { type: String },
  vet_status: { type: String },
}, { versionKey: false });


var applicantmodel = mongoose.model("applicant", applicantSchema, "applicant");

//for inserting applicant data
app.post('/api/savedata',  (req, res, next) => {
  req.body.fileName = req.files[0].filename;
  console.log(req.body);

  var datafile = req.files
  if (!datafile) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  var mod = new applicantmodel( req.body);
  mod.save(function(err, data) {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
});

//   app.get("/api/getdata", function(req, res) {
//     applicantmodel.find({}, function(err, data) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// });
//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});
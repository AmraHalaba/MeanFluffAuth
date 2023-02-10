/****************************IMPORT INSTALLED MODULES****************************/
const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');

/****************************IMPORT CORE NODE MODULES****************************/
const path          = require('path');

/****************************IMPORT CREATED MODULES****************************/
const users         = require('./routes/users');
const { DB, PORT }  = require("./config/index.js");


/****************************INITIALIZE APP VARIABLE****************************/
const app = express();

console.log(DB);
console.log(PORT);

/****************************DATABASE CONNECTION****************************/
mongoose.set("strictQuery", false);
mongoose
  .connect(DB, { dbName: 'MeanFluff' , useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Database Connected Successfully.");
    console.log("DB URI: ", DB);
    app.listen(PORT);
    console.log("Server Started on Port: ", PORT);
  })
  .catch((err) => {
    console.log("Database Connection Failure.");
  });


/****************************MIDDLEWARES****************************/
app.use(cors());
app.use(bodyParser.json());


/****************************SET STATIC FOLDER****************************/
app.use(express.static(path.join(__dirname, 'public')));

/****************************SETUP USING ROUTES****************************/
app.use('/users', users);


/****************************HOMEPAGE ROUTE TEMPORARY BEFORE FRONTEND CONNECTION****************************/
app.get('/', (req, res) => {
    res.send("Invalid Endpoint. Temporary before connecting to the Angular frontend's index.js, just not to get an error on the Homepage when running the server.")
});

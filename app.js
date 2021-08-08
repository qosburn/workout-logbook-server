require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

let user = require('./controllers/usercontroller');
let log = require('./controllers/logcontroller');

sequelize.sync();
// --- this resets the database
//sequelize.sync({ force: true });

// adding call for Middleware
// app.use(require('./middleware/headers'));

app.use(express.json());

//*UNPROTECTED ROUTE
app.use('/user', user);

//*PROTECTED ROUTE to implement our middleware function
app.use(require('./Middleware/validate-session'));
app.use('/log', log);

app.use('/test', function (req, res) {
  res.send('This is a message form the test endpoint on the server');
});

app.listen(3002, function () {
  //sequelize.sync({ force: true });
  console.log('App is listening on port 3002');
});

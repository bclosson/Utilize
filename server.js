// IMPORTS
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4001;
const app = express();
const passport = require('passport');
const users = require('./routes/api/users');
const path = require('path');

const corsOptions = {
  // origin: 'http://localhost:3000'
  origin: 'https://guarded-earth-36243.herokuapp.com/' 
}
// PASSPORT MIDDLEWARE
app.use(passport.initialize());

// PASSPORT CONFIG
require('./config/passport')(passport);

// MIDDLEWARE - BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// MIDDLEWARE - JSON PARSING
app.use(express.json());
app.use(cors(corsOptions));

// MIDDLEWARE - API ROUTES
app.use('/api/v1/recipes', routes.recipes);
app.use('/api/users', users)

// SERVE STATIC ASSETS IF IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// CONNECTION
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

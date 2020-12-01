// IMPORTS
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;
const app = express();
const passport = require('passport');
const users = require('./routes/api/users');

const corsOptions = {
  origin: 'http://localhost:3000'
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

// CONNECTION
app.listen(port, () => console.log(`Server is running on port ${port}`));
// IMPORTS
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

// MIDDLEWARE - JSON PARSING


// MIDDLEWARE - API ROUTES


// CONNECTION 

app.listen(port, () => console.log(`server is running on port ${port}`));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const initializeRoute = require('./routes/initialize');
const combinedDataRoute = require('./routes/combineData');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://rahulgupta:rahulbaba@projectdata.slpr5.mongodb.net/?retryWrites=true&w=majority&appName=projectdata'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', initializeRoute);
app.use('/api', combinedDataRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


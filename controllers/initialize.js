const axios = require('axios');
const Product = require('../models/university');

const initializeDatabase = async (req, res) => {
  try {
    const { data } = await axios.get('http://universities.hipolabs.com/search');    
    await Product.insertMany(data);
    // console.log(data);
    res.status(200).json({ message: 'Database initialized successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to initialize database' });
  }
};
module.exports = { initializeDatabase };

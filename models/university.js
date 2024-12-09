
const mongoose = require('mongoose');

const universityschema = new mongoose.Schema({
    country: String,
  name: String,
  state_province: String,
  
  alpha_two_code: String,
  domains: Object,
  web_pages: Object,
  
  
 
});

module.exports = mongoose.model('UniversityList', universityschema);
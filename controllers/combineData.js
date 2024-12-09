const college = require('../models/university');

const getcombineData = async (req, res) => {
  const { name, country } = req.query;

  try {
    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (country) query.country = { $regex: country, $options: 'i' };

    const data = await college.find(query);

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error fetching university data:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch university data' });
  }
};

module.exports = { getcombineData };

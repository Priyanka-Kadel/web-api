const User = require('../models/customer');
const Product = require('../models/product');

// Combined getStats function
exports.getStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    
    const products = await Product.countDocuments();
    
    const stats = {
      users,
      products,
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

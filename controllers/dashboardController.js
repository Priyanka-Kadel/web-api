// const User = require('../models/customer');
// const Product = require('../models/product');

// // Combined getStats function
// exports.getStats = async (req, res) => {
//   try {
//     // Count the total number of users
//     const users = await User.countDocuments();
    
//     // Count the total number of products
//     const products = await Product.countDocuments();
    
//     // Return all stats in the response
//     const stats = {
//       users,
//       products,
//     };
    
//     res.json(stats); // Sending all the stats as a response
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

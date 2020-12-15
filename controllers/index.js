const { updateCustomer, deleteCustomer } = require("./customers.js");
const { getHotels, postHotel } = require("./hotels.js");

module.exports = {
  updateCustomer: updateCustomer,
  deleteCustomer: deleteCustomer,
  getHotels: getHotels,
  postHotel: postHotel,
};

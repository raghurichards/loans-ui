const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://loans:loans123@clusterloan.elpls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var conn = mongoose.Collection;

var customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  dob: String,
  department: String,
});

var customerModel = mongoose.model("Customers", customerSchema);

module.exports = customerModel;

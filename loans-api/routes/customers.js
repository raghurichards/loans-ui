var express = require("express");
var router = express.Router();
var cors = require("cors");

var mongoose = require("mongoose");

var customerModel = require("../models/customers.model.js");

/* GET all customers listing. */
router.get("/list", function (_req, res, _next) {
  customerModel.find(function (err, customerListResponse) {
    if (err) {
      res.send({ status: 500, message: "Unable to find customer" });
    } else {
      const recordCount = customerListResponse.length;
      res.send({
        status: 200,
        recordCount: recordCount,
        results: customerListResponse,
      });
    }
  });
});

/* GET details of specific seleted customers listing. */
router.get("/view", function (req, res, _next) {
  const userID = req.query.userID;

  customerModel.findById(userID, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: "Unable to find the customer" });
    } else {
      res.send({
        status: 200,
        results: customerResponse,
      });
    }
  });
});

/* create new users listing. */
router.post("/add", function (req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  let customerObj = new customerModel({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department,
  });

  customerObj.save(function (err, customerObj) {
    if (err) {
      res.send({ status: 500, message: "Unable to add customer" });
    } else {
      res.send({
        status: 200,
        message: "User added successfully",
      });
    }
  });
});

/* update existing users listing. */
router.put("/update", function (req, res, next) {
  //console.log(req.query.userID);
  const userID = req.query.userID;

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  let customerObj = {
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department,
  };

  customerModel.findByIdAndUpdate(
    userID,
    req.body,

    { new: true, runValidators: true },

    function (err, customerObj) {
      if (err) {
        res.send({ status: 500, message: "Unable to update the customer" });
      } else {
        res.send({
          status: 200,
          message: "User updated successfully",
          results: customerObj,
        });
      }
    }
  );
});

/* delete existing users listing. */
router.get("/delete", function (req, res, next) {
  const userID = req.query.userID;

  customerModel.findByIdAndDelete(userID, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: "Unable to update the customer" });
    } else {
      res.send({
        status: 200,
        message: "User deleted successfully",
        results: customerResponse,
      });
    }
  });
});

/* delete existing many-users listing. */
router.get("/delete-multiple", function (req, res, next) {
  const userID = req.query.userID;

  customerModel.deleteMany(
    { firstName: "mary" },
    function (err, customerResponse) {
      if (err) {
        res.send({ status: 500, message: "Unable to update the customer" });
      } else {
        res.send({
          status: 200,
          message: "Users deleted successfully",
          results: customerResponse,
        });
      }
    }
  );
});

/* search existing users listing. */
router.get("/search", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

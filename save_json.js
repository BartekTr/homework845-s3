const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const save = async (favNumber) => {
  console.log("saving" + JSON.stringify(favNumber, null, 2));
  await s3.putObject({
    Body: JSON.stringify(favNumber, null, 2),
    Bucket: "cyclic-weak-blue-cuttlefish-gear-eu-central-1",
    Key: "number.json",
  }).promise()
};

module.exports = { save };
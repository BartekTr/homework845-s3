const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

// const save = (favNumber) => {
//   console.log("saving");
//   fs.writeFile(
//     path.join(__dirname, ".", "number.json"),
//     JSON.stringify(favNumber, null, 2),
//     (error) => {
//       if (error) {
//         throw error;
//       }
//     }
//   );
// };

const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject( {
      Body: JSON.stringify(favNumber, null, 2),
      Bucket: process.env.CYCLIC_BUCKET_NAME,
      Key: "number.json",
    }
  ).promise();
};

module.exports = { save };
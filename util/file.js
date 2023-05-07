const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const path = require("path");

exports.deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.uploadImage = async (fileName) => {
  try {
    const result = await cloudinary.uploader.upload(
      path.join(__dirname, "..", "images", fileName),
      {
        folder: "/express-shop",
        public_id: fileName,
      }
    );
    console.log("Uploading to cloud complete.");
    return result;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
};

exports.destroyImage = async (fileName) => {
  try {
    await cloudinary.api.delete_resources(`${fileName}`);
    console.log("Deleted image from the cloud.");
  } catch (err) {
    console.log(err);
  }
};

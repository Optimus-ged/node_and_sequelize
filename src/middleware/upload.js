// Importing dependancy
import multer from "multer";
import fs from "fs";
// function to filter my images, accept or reject some images
// extensions
// cb => means call back function
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Definition of the storage : destination and fileName
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/images");
  },
  filename: (req, file, cb) => {
    let newName = `${Date().getFullYear()}${file.originalname}`;
    cb(null, newName);
  },
});

// with this constant i will be able to upload the image
// using my post-request
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

export default upload;

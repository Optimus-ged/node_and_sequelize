// Importing dependancy
import multer from "multer";

// function to filter my images, accept or reject some images
// extensions
// cb => means call back function
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "public/images/jpeg" ||
    file.mimetype === "public/images/PNG"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Definition of the storage : destination and fileName
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
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

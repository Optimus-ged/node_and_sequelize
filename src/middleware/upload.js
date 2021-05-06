// Importing depedancies
import multer from "multer";

// Filtering image
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Defining file destination on the server
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/images");
  },
  filename: (req, file, cb) => {
    let dt = new Date();
    let fileName = `${dt.getFullYear()}-${dt.getUTCMonth() + 1}-${dt.getUTCDate()} ${
      file.originalname
    }`;
    cb(null, fileName);
  },
});

// Defining file zize limits
const fileSize = { fileSize: 1024 * 1024 * 5 };

// Now uploading the image
const upload = multer({
  fileFilter: fileFilter,
  limits: fileSize,
  storage: storage,
});

export default upload;
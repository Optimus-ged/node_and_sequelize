// Importing depedancies
import multer from "multer";

// Filtering image
const fileFilter = (req, file, cb) => {
  console.log(file);
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "application/octet-stream"
  ) {
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
    let fileName = `${dt.getTime()}_${file.originalname}`;
    cb(null, fileName);
  },
});

// Defining file zize limits
const fileSize = { fileSize: 1024 ** 2 * 5 };

// Now uploading the image
const upload = multer({
  fileFilter: fileFilter,
  limits: fileSize,
  storage: storage,
});

export default upload;

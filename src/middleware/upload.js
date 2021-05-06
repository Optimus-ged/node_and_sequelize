// Importing dependancy
import multer from "multer";

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
    // let imgdest = "src/public/images";
    // let dest = fs.existsSync(imgdest)
    //   ? imgdest
    //   : fs.mkdir(imgdest, (e) => {
    //       if (e) throw e;
    //     });
    cb(null, "src/public/images");
  },
  filename: (req, file, cb) => {
    let dt = new Date();
    let newName = `${dt.getUTCFullYear()}-${dt.getUTCMonth() + 1}-${dt.getUTCDate()} ${
      file.originalname
    }`;
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

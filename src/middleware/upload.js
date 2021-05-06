// Importing depedancies
import multer from 'multer';

// Filtering the file
const fileFilter = (req, file, cb)=>{
  if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
    cb(null, true);
  }else{
    cb(null, false);
  }
}

// Defining file destinaion
const storage = multer.diskStorage({
  destination : (req, file, cb)=>{
    cb(null, "src/public/images");
  },
  filename : (req, file, cb)=>{
    cb(null, file.originalname)
  }
});

// Uploading file
const upload = multer({
  storage : storage,
  limits : {
    fileSize : 1024 * 1024 * 5
  },
  fileFilter : fileFilter
});

// Exporting module
export default upload;
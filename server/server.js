const express = require("express"); // To build RESTful APIs
const multer = require("multer"); // Handling multipart/form-data: primarily used for uploading files
const cors = require("cors"); // making requests for resources to an external back-end server

const app = express();

app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).array("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.files);
  });
});

app.listen(8000, () => {
  console.log("App is running on port 8000");
});

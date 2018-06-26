const router = require("express").Router();
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");

router.use(bodyParser.json());

let uploadedImages = [];

const Storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "./uploads");
	},
	filename: function(req, file, callback) {
        const filename = file.fieldname + "_" + Date.now() + "_" + file.originalname;
        uploadedImages.push(filename);
		callback(null, filename);
	}
});

const upload = multer({
    storage: Storage
  }).single('fileUpload');
  
// Matches with "/api/uploads"
router.route("/")
  .post(function(req, res) {
    upload(req, res, function(err) {
      console.log(req.file);
        if (err) {
          console.log(err);
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
  });

router.get("/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../../uploads/" + req.params.filename));
});

module.exports = router;

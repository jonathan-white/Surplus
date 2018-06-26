const router = require("express").Router();
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");

router.use(bodyParser.json());

const Storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "./uploads");
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
	}
});

const upload = multer({
    storage: Storage
  }).single('fileUpload');
  
// Matches with "/api/uploads"
router.route("/")
  .post(function(req, res) {
    upload(req, res, function(err) {
        if (err) {
          console.log(err);
            return res.end("Something went wrong!");
        }
        req.file.url = `/api/uploads/${req.file.filename}`;
        console.log(req.file);
        return res.json(req.file);
        // return res.end("File uploaded sucessfully!.");
    });
  });

// Displays images at "/api/uploads/{filename}" from uploads folder
router.get("/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../../uploads/" + req.params.filename));
});

module.exports = router;

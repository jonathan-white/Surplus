const router = require("express").Router();
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");
// const Storage = require('@google-cloud/storage');

router.use(bodyParser.json());

const mStorage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "./uploads");
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
	}
});

const upload = multer({
    storage: mStorage
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
        console.log(req.file); //TODO: Remove

				const bucketName = process.env.BUCKET;
				const filename = path.join(__dirname, "../../uploads/" + req.file.filename);

				console.log('filename:',filename);
				uploadFile(bucketName, filename);

        return res.json(req.file);
        // return res.end("File uploaded sucessfully!.");
    });
  });

// Displays images at "/api/uploads/{filename}" from uploads folder
router.get("/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../../uploads/" + req.params.filename));
});

// =========================
// Google Cloud Integration
// =========================
const uploadFile = (bucketName, filename) => {
	// Imports the Google Cloud client library
	const Storage = require('@google-cloud/storage');

	// Creates a client
	const projectId = process.env.PROJECT_ID;

	const storage = new Storage({ projectId });

	// Uploads a local file to the bucket
	storage
	.bucket(bucketName)
	.upload(filename)
	.then(() => {
		console.log(`${filename} uploaded to ${bucketName}.`);
	})
	.catch(err => {
		console.error('ERROR:', err);
	});

}

module.exports = router;

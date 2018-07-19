const router = require("express").Router();
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");

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
  }).single('imageUpload');

// Matches with "/api/uploads"
router.route("/")
  .post(function(req, res) {
    upload(req, res, function(err) {
        if (err) {
          console.log(err);
            return res.end("Something went wrong!");
        }

				const bucketName = process.env.BUCKET;
				const filename = path.join(__dirname, "../../uploads/" + req.file.filename);

				uploadFile(bucketName, filename);

				req.file.local_url = `/api/uploads/${req.file.filename}`;
				req.file.cloud_url = `https://storage.googleapis.com/surplus-6507a.appspot.com/${req.file.filename}`;

        return res.json(req.file);
        // return res.end("File uploaded sucessfully!.");
    });
  })
	.delete(function(req, res) {

		const bucketName = process.env.BUCKET;
		const filepath = req.body.filepath;

		deleteFile(bucketName, filepath);
		return res.json({
			status: 'Delete complete',
			file: filepath
		});
	});

// Displays images at "/api/uploads/{filename}" from uploads folder
router.get("/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../../uploads/" + req.params.filename));
});

// Upload a file to Google Cloud Storage
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
		// console.log(`${filename} uploaded to ${bucketName}.`);
	})
	.catch(err => {
		console.error('ERROR:', err);
	});
}

// Delete a file from Google Cloud Storage
function deleteFile(bucketName, filename) {
  // [START storage_delete_file]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

	// Creates a client
	const projectId = process.env.PROJECT_ID;
	const storage = new Storage({ projectId });

  // Deletes the file from the bucket
  storage
    .bucket(bucketName)
    .file(filename)
    .delete()
    .then(() => {
      console.log(`gs://${bucketName}/${filename} deleted.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_delete_file]
}

module.exports = router;

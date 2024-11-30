const express = require("express");
const upload = require("../middleware/modelUpload");
const { uploadModel } = require("../controllers/r2Controller");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadModel);

module.exports = router;

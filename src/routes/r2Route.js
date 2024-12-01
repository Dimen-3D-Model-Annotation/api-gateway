const express = require("express");
const upload = require("../middleware/modelUpload");
const { uploadModel } = require("../controllers/r2Controller");
const { getModels } = require("../controllers/r2Controller");
const { getModel } = require("../controllers/r2Controller");
const { deleteModel } = require("../controllers/r2Controller");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadModel);
router.get("/", getModels);
router.get("/:id", getModel);
router.delete("/:id", deleteModel);

module.exports = router;

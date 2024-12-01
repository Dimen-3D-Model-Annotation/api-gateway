const express = require("express");
const { createAnnotationController } = require("../controllers/annotationController");
const { getAnnotationsByModelIdController } = require("../controllers/annotationController");
// const { getAnnotation } = require("../controllers/annotationController");
// const { deleteAnnotation } = require("../controllers/annotationController");

const router = express.Router();

router.post("/", createAnnotationController);
router.get("/:modelId", getAnnotationsByModelIdController);
// router.get("/:id", getAnnotation);
// router.delete("/:id", deleteAnnotation);

module.exports = router;

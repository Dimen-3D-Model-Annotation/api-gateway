const { createAnnotation } = require("../services/annotationService");
const { getAnnotationsByModelId } = require("../services/annotationService");

const createAnnotationController = async (req, res) => {

  try {
    const annotation = await createAnnotation(req.body);
    res.status(201).json(annotation.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create annotation" });
  }
};

const getAnnotationsByModelIdController = async (req, res) => {
  try {
    const { modelId } = req.params;
    const annotations = await getAnnotationsByModelId(
      modelId
    );
    res.status(200).json(annotations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve annotations" });
  }
};

module.exports = { createAnnotationController, getAnnotationsByModelIdController };

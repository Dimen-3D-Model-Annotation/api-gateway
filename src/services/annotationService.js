const { default: axios } = require("axios");
const { ANNOTATION_BASE_URL } = require("../config/config.js");

const createAnnotation = async (annotationData) => {
  
  try {
    // console.log("annotationData", annotationData);
    const response = await axios.post(`${ANNOTATION_BASE_URL}`, annotationData);

    // console.log("response.data", response);
    return response;

  } catch (error) {

    console.error("Error Creating Annotation!:", error);
    throw error;
  }
};

const getAnnotationsByModelId = async (modelId) => {
  try {
    const response = await axios.get(`${ANNOTATION_BASE_URL}/${modelId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching annotations:", error);
    throw error;
  }
};

module.exports = {
  createAnnotation,
  getAnnotationsByModelId,
};

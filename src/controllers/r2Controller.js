const { uploadToR2 } = require("../services/r2Service");

async function uploadModel(req, res) {

  // console.log(req.file);

  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const r2Path = await uploadToR2(file);

    // return res.status(200).json(r2Path);

    // console.log(r2Path);

    // Pass to FastAPI backend for database storage
    const modelInfo = {
      model_name: file.originalname,
      file_path: r2Path,
    };

    // Send the model info to FastAPI
    const response = await fetch("http://localhost:8000/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modelInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("FastAPI Error:", errorData);
      return res.status(response.status).json(errorData);
    }

    const result = await response.json();
    res.status(200).json(result);

  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
}

module.exports = { uploadModel };

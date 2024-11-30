const r2Client = require("../config/r2Config");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const uploadToR2 = async (file) => {
  
  const bucketName = process.env.R2_BUCKET_NAME;
  const bucketId = process.env.R2_BUCKET_ID;
  const key = `models/${Date.now()}-${file.originalname}`; // Unique key for the file

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await r2Client.send(new PutObjectCommand(params));
  return `https://pub-${bucketId}.r2.dev/${key}`;
};

module.exports = { uploadToR2 };

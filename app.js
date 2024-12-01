const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const adminRoutes = require("./src/routes/adminRoute");
const modelRoutes = require("./src/routes/r2Route");
const annotationRoutes = require("./src/routes/annotationRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/users", adminRoutes);
app.use("/api/models", modelRoutes);
app.use("/api/annotations", annotationRoutes);

// app.listen(PORT, () => {
//     console.log(`API Gateway server is running on http://localhost:${PORT}`);
// });

module.exports = app;

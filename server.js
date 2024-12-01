const http = require("http");
const app = require("./app"); // Your Express app
const initializeSocket = require("./src/middleware/socketMiddleware");

require('dotenv').config();
const PORT = process.env.PORT || 3500;

const server = http.createServer(app);
initializeSocket(server);

server.listen(PORT, () => {
  console.log(`API Gateway server is running on http://localhost:${PORT}`);
});

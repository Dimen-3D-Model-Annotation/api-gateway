const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const adminRoutes = require('./src/routes/adminRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/users', adminRoutes);

app.listen(PORT, () => {
    console.log(`API Gateway server is running on http://localhost:${PORT}`);
});

const axios = require('axios');
const logger = require('../utils/logger');
const ADMIN_BASE_URL = require('../config/adminConfig');

const fetchUsers = async () => {
    try {
        const response = await axios.get(ADMIN_BASE_URL);
        return response.data;
    } catch (error) {
        logger.error('Error fetching the users:', { message: error.message, stack: error.stack });
        throw new Error('Failed to fetch users');
    }
};

module.exports = {
    fetchUsers,
};

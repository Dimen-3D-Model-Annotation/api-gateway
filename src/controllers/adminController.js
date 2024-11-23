const adminService = require('../services/adminService');
const logger = require('../utils/logger');

const getUsers = async (req, res) => {
    try {
        const Users = await adminService.fetchUsers();
        logger.info('Successfully fetched all users');
        res.json(Users);
    } catch (error) {
        logger.error('Error fetching users', { message: error.message, stack: error.stack });
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

module.exports = {
    getUsers,
};


const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction } = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

// Protect all transaction routes
router.get('/',  getTransactions);
router.post('/', addTransaction);

module.exports = router;

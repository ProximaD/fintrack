const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

// GET all transactions for logged-in user
router.get('/', protect, getTransactions);

// POST a new transaction
router.post('/', protect, addTransaction);

// DELETE a transaction by ID
router.delete('/:id', protect, deleteTransaction);

module.exports = router;

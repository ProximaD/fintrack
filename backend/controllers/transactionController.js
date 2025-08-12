const getTransactions = (req, res) => {
    res.send("All transactions");
};

const addTransaction = (req, res) => {
    res.send("Transaction added");
};

module.exports = { getTransactions, addTransaction };
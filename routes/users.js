const express = require('express');
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();


router.get('/', (req, res) => {
    getAllUsers(req, res);
});

router.post('/', (req, res) => {
    createUser(req, res);
});

router.get('/:id', (req, res) => {
    getUser(req, res);
});

router.put('/:id', (req, res) => {
    updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    deleteUser(req, res);
});

module.exports = router;
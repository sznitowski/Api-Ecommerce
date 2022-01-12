const express = require('express');
const { registerUser, loginUser, findUserById, findAllUsers, updateUser, deleteUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/sign-up', registerUser);
router.post('/login', loginUser);
router.get('/:id', findUserById);
router.get('/', findAllUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
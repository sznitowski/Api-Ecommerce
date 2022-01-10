const express = require('express');
const { signUp, login, findUserById, findAllUsers, updateUser, deleteUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/login', login);
router.get('/:id', findUserById);
router.get('/', findAllUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
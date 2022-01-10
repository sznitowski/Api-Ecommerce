const express = require('express');
const { createPost, findPostById, findAllPosts, updatePost, deletePost } = require('../controllers/post.controller');

const router = express.Router();

router.post('/', createPost);
router.get('/:id', findPostById);
router.get('/', findAllPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;

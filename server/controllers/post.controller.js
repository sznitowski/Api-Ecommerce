const validator = require('fastest-validator');
const models = require('../models');

function createPost(req, res) {
    const post = {
        title: req.body.title,
        content: req.body.content,
        categoryId: req.body.category_id
    }
    //create validations
    const schema = {
        title: {type:'string', optional: false, max: '50'},
        content: {type:'string', optional: false, max: '250'},
        categoryId: {type:'number', optional: true}
    }

    const v = new validator();
    const validationResponse = v.validate(post, schema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: 'Validation fail',
            error: validationResponse
        })
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: 'Post created successfully',
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

function findPostById(req, res) {
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'Post not found',
            })
        }
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        })
    })
}

function findAllPosts(req, res) {
    models.Post.findAll().then(result => {
        res.status(200).json({
            message: 'All posts list',
            result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Someting went wrong',
            error: error
        })
    });
}

function updatePost(req, res) {
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        categoryId: req.body.category_id,
    }
    //update validations
    const schema = {
        title: {type:'string', optional: false, max: '50'},
        content: {type:'string', optional: false, max: '250'},
        categoryId: {type:'number', optional: false}
    }

    const v = new validator();
    const validationResponse = v.validate(updatedPost, schema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: 'Validation fail',
            error: validationResponse
        })
    }


    models.Post.update(updatedPost, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Post updated successfully",
            post: updatedPost
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}

function deletePost(req, res) {
    const id = req.params.id;
    models.Post.destroy({ where: { id: id } }).then(result => {
        if (result) {
            res.status(200).json({
                message: "Post deleted successfully",
                result
            });
        } else {
            res.status(404).json({
                message: 'Post not found',
            })
        }
        res.status(200).json({
            message: "Post deleted successfully",
            result
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })

}

module.exports = {
    createPost,
    findPostById,
    findAllPosts,
    updatePost,
    deletePost
}
const models = require('../models');
const validator = require('fastest-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require("../utilis/generateToken");

//RegisterUser Post: /api/user/sign-up 
function registerUser(req, res) {

    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: 'Email alredy exist',
            });
        } else {
            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {
                    const id = req.body.id;
                    const user = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        age: req.body.age,
                        password: hash,
                        token: generateToken(id)
                        
                    }

                    models.User.create(user).then(result => {
                        res.status(201).json({
                            user,
                            message: 'User created successfully',
                            
                        })
                    }).catch(error => {
                        res.status(500).json({
                            message: 'Something went wrong',
                        });
                    });
                })
            })

        }
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
        });
    })

}

//Login Post: /api/user/login
function loginUser(req, res) {
    models.User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user === null) {
            res.status(401).json({
                message: "Invalid credentials!",
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function (err, result) {
                if (result) {

                    const token = jwt.sign({
                        _id: user._id,
                        expiresIn: 3000,
                        email: user.email,
                        password: user.password,
                        token: generateToken(user._id)

                    }, `${process.env.JWT_SECRET_KEY}` , function (err, token) {
                        res.status(200).json({
                            user,
                            message: "Authentication successful!",
                            token
                        });
                        
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

// FindOneUser Get: /api/user/:id
function findUserById(req, res) {
    const id = req.params.id;

    models.User.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'User not found',
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

//FindallUsers Get: /api/user
function findAllUsers(req, res) {
    models.User.findAll().then(data => {
        res.status(200).json({
            message: 'Users list',
            data
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Someting went wrong',
            error: error
        })
    });
}

//UpdateUser Patch: /api/user/:id
function updateUser(req, res) {
    const id = req.params.id;
    const updatedUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }
    //update validations
    const schema = {
        firstName: { type: 'string', optional: false, max: '20' },
        lastName: { type: 'string', optional: false, max: '20' },
        email: { type: 'string', optional: false, max: '25' },
    }

    const v = new validator();
    const validationResponse = v.validate(updatedUser, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: 'Validation fail',
            error: validationResponse
        })
    }

    models.User.update(updatedUser, { where: { id: id } }).then(data => {
        res.status(200).json({
            message: "User updated successfully",
            User: updatedUser
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}

//deleteUser Delete: /api/user/:id
function deleteUser(req, res) {
    const id = req.params.id;
    models.User.destroy({ where: { id: id } }).then(result => {
        if (result) {
            res.status(200).json({
                message: "User deleted successfully",
                result
            });
        } else {
            res.status(404).json({
                message: 'User not found',
            })
        }
        res.status(200).json({
            message: "User deleted successfully",
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
    registerUser,
    loginUser,
    findUserById,
    findAllUsers,
    updateUser,
    deleteUser
}
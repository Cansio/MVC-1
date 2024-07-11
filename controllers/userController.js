const User = require('../models/userModel');

const getAllUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) { console.log(err, 'err'); }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });
};

const getUserById = (req, res) => {
    let id = req.params.id;
    User.getById(id, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
};

const createUser = (req, res) => {
    let data = req.body;
    User.create(data, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data inserted'
        });
    });
};

const updateUser = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    User.update(id, data, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
};

const deleteUser = (req, res) => {
    let id = req.params.id;
    User.delete(id, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data deleted'
        });
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

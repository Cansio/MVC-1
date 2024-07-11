const db = require('../config');

const User = {
    getAll: (callback) => {
        let qr = 'SELECT * FROM users';
        db.query(qr, callback);
    },

    getById: (id, callback) => {
        let qr = `SELECT * FROM users WHERE id = ${id}`;
        db.query(qr, callback);
    },

    create: (data, callback) => {
        let qr = `INSERT INTO users (fullname, email, phone) VALUES ('${data.fullname}', '${data.email}', '${data.phone}')`;
        db.query(qr, callback);
    },

    update: (id, data, callback) => {
        let qr = `UPDATE users SET fullname='${data.fullname}', email='${data.email}', phone='${data.phone}' WHERE id=${id}`;
        db.query(qr, callback);
    },

    delete: (id, callback) => {
        let qr = `DELETE FROM users WHERE id='${id}'`;
        db.query(qr, callback);
    }
};

module.exports = User;

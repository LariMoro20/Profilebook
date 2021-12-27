const db = require('../database');

class Users {

    constructor(name, email, cpf, pass, login) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.login = login;
        this.password = pass;
        this.type = 0;
    }

    static getByID(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `users` WHERE `id` = ?', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }

    static doLogin(login) {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `users` WHERE `username` = ?', [login.login.user], function (err, rows, fields) {
                    if (err) throw err;
                    if (rows.length <= 0) reject('user não existe');
                    resolve(rows)
                });

            }
        )
    }

    static doSignIn(login) {
        return new Promise(
            (resolve, reject) => {
                db.query('Insert into `users` ( `username`, `name`, `email`, `passwd`, `image`, `bio` ) VALUES (?, ?, ?, ?, ?, ?);', [login.login.user, login.login.name, login.login.email, login.login.passwd, login.login.image, login.login.bio, login.login.company], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }

    static getAllUsers() {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `users` limit 100', function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }
}

module.exports = Users;
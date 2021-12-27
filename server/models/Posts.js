const db = require('../database');

class Posts {
    constructor(title, description, id_user, date_add) {
        this.title = title;
        this.description = description;
        this.id_user = id_user;
        this.date_add = date_add;
    }

    static getByUserID(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `posts` WHERE `id_user` = ? order by id desc', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }

    static deletePost(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('Delete FROM `posts` WHERE `id` = ?', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }
    static addPost(body) {
        return new Promise(
            (resolve, reject) => {
                db.query("Insert into `posts` (`id_user`, `title`, `description`) VALUES (?, ?, ?);", [body.message.id_user, body.message.title, body.message.description], function (err, rows, fields) {
                    if (err) throw err;
                    db.query('SELECT * FROM `posts` WHERE `id_user` = ? order by id desc', [body.message.id_user], function (err, rows, fields) {
                        if (err) throw err;
                        resolve(rows)
                    });
                });

            }
        )
    }

    static likePost(body) {
        return new Promise(
            (resolve, reject) => {
                let liked = body.liked === 1 ? 0 : 1
                db.query("UPDATE `posts` SET liked = ? where id = ?", [liked, body.id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }


    static getAllPosts() {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `posts` limit 100', function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }

}
module.exports = Posts;





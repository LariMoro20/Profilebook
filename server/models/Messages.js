const db = require('../database');

class Messages {
    constructor(title, description, id_user, date_add) {
        this.title = title;
        this.description = description;
        this.id_user = id_user;
        this.date_add = date_add;
    }

    static getMessagesSend(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT messages.id, messages.liked, messages.`title`, messages.`message`, messages.`liked`, messages.date, users.username FROM `messages` inner join users on users.id = messages.id_user_to where messages.id_user_from = ? order by messages.date desc', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }
    static getMessagesRec(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT messages.id, messages.liked, messages.`title`, messages.`message`, messages.`liked`, messages.date, users.image, users.username FROM `messages` inner join users on users.id = messages.id_user_from where messages.id_user_to = ? order by messages.date desc', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }


    static deleteMessage(id) {
        return new Promise(
            (resolve, reject) => {
                db.query('Delete FROM `messages` WHERE `id` = ?', [id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }
    static addMessage(body) {
        return new Promise(
            (resolve, reject) => {
                db.query("Insert into `messages` ( `id_user_from`, `id_user_to`, `title`, `message`) VALUES (?, ?, ?, ?);", [body.message.id_user_from, body.message.id_user_to, body.message.title, body.message.message], function (err, rows, fields) {
                    if (err) throw err;
                    db.query('SELECT messages.id, messages.liked, messages.`title`, messages.`message`, messages.`liked`, messages.date, users.username FROM `messages` inner join users on users.id = messages.id_user_to where messages.id_user_from = ? order by messages.date desc', [body.message.id_user_from], function (err, rows, fields) {
                        if (err) throw err;
                        resolve(rows)
                    });
                });

            }
        )
    }

    static likeMessage(body) {
        return new Promise(
            (resolve, reject) => {
                let liked = body.liked === 1 ? 0 : 1
                db.query("UPDATE `messages` SET liked = ? where id = ?", [liked, body.id], function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }


    static getAllMessages() {
        return new Promise(
            (resolve, reject) => {
                db.query('SELECT * FROM `messages` limit 100', function (err, rows, fields) {
                    if (err) throw err;
                    resolve(rows)
                });

            }
        )
    }

}
module.exports = Messages;





const Posts = require('../models/Posts');
const Users = require('../models/Users');
const Messages = require('../models/Messages');

// =========== Users
exports.getUser = (req, res) => {
    Users.getByID(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.getAllUsers = (req, res) => {
    Users.getAllUsers()
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.doLogin = (req, res) => {
    Users.doLogin(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.doSignIn = (req, res) => {
    Users.doSignIn(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

//=========================
//============== Postagens

exports.getPost = (req, res) => {
    Posts.getByUserID(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.likePost = (req, res) => {
    Posts.likePost(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
exports.getAllPosts = (req, res) => {
    Posts.getAllPosts(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.deletePost = (req, res) => {
    Posts.deletePost(req.body.id)
        .then(resultado => {
            res.json({ 'Message': 'Removido com sucesso', "status": "OK" })
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.addPost = (req, res) => {
    Posts.addPost(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

//=========================
//========= Mensagens

exports.getMessagesSend = (req, res) => {
    Messages.getMessagesSend(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
exports.getMessagesRec = (req, res) => {
    Messages.getMessagesRec(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
exports.addMessage = (req, res) => {
    Messages.addMessage(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
exports.deleteMessage = (req, res) => {
    Messages.deleteMessage(req.body.id)
        .then(resultado => {
            res.json({ 'Message': 'Removido com sucesso', "status": "OK" })
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
exports.getMessages = (req, res) => {
    Messages.getByUserID(req.params.id)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}

exports.likeMessage = (req, res) => {
    Messages.likeMessage(req.body)
        .then(resultado => {
            res.json(resultado)
        }).catch((e) => {
            res.json({ 'Message': 'Houve um problema', "status": "ERROR" })
        })
}
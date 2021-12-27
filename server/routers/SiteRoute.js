const express = require('express');
const bodyparser = require('body-parser');
const Controlador = require('../controllers/mainController');
const app = express();
const router = express.Router();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

router.get("/api/", (req, res) => {
  res.json({ "users": ["LariMoro20", "LariMoro1"] })

})

router.get('/api/users/:id', Controlador.getUser);
router.get('/api/allusers/', Controlador.getAllUsers);
router.post('/api/user/login/', Controlador.doLogin);
router.post('/api/user/add/', Controlador.doSignIn);

router.get('/api/posts/:id', Controlador.getPost);
router.get('/api/posts/', Controlador.getAllPosts);
router.post('/api/posts/remove/', Controlador.deletePost);
router.post('/api/posts/add/', Controlador.addPost);
router.post('/api/posts/like/', Controlador.likePost);

router.get('/api/messages/sendded/:id', Controlador.getMessagesSend);
router.get('/api/messages/received/:id', Controlador.getMessagesRec);

router.post('/api/messages/add/', Controlador.addMessage);
router.post('/api/messages/remove/', Controlador.deleteMessage);
router.post('/api/messages/like/', Controlador.likeMessage);



module.exports = router;
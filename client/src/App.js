import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Login from './pages/Login';
import FollowersPage from './pages/FollowersPage';
import FollowingPage from './pages/FollowingPage';
import SignIn from './pages/SignIn';
import Menu from "./components/Menu";
import React, { useState, useEffect } from 'react'
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([{ }])
  const [messagesSend, setMessagesSend] = useState([{ }])
  const [messagesGet, setMessagesGet] = useState([{ }])
  // const [gitUser, setUser] = useState({ })

  const gitUser = localStorage.getItem("user-login") ? JSON.parse(localStorage.getItem("user-login")) : '';
  /*const handleGitUser = (user) => {
    console('user', user)
    setUser(user)
  }*/

  useEffect(() => {
    fetch("/api/posts/" + gitUser.id)
      .then(res => res.json()).then(res => {
        setPosts(res)
      })

    fetch("/api/messages/sendded/" + gitUser.id)
      .then(res => res.json()).then(res => {
        setMessagesSend(res)
        console.log(res)
      })

    fetch("/api/messages/received/" + gitUser.id)
      .then(res => res.json()).then(res => {
        setMessagesGet(res)
        console.log('recebid', res)
      })
  }, []);




  //======== Postagens
  const handleAddPost = (title, id_user, description) => {
    let dados = {
      title: title,
      id_user: id_user,
      description: description
    }
    axios
      .post("/api/posts/add/", {
        message: dados
      })
      .then((response) => {
        setPosts(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const handleDeletePost = async (id) => {
    const newPost = posts.filter(post => post.id !== id)
    axios
      .post("/api/posts/remove/", {
        id: id
      })
      .then((response) => setPosts(newPost))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const handlePostLike = async (idMessage, liked) => {
    const newPost = posts.map((msg) => {
      let likedm = msg.liked === 0 ? 1 : 0
      if (msg.id === idMessage) return { ...msg, liked: likedm };
      return msg;
    });
    axios
      .post("/api/posts/like/", {
        id: idMessage,
        liked: liked
      })
      .then((response) => { setPosts(newPost); })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  //========Messages
  const handleAddMesssage = (dados) => {
    axios
      .post("/api/messages/add/", {
        message: dados
      })
      .then((response) => {
        setMessagesSend(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  const handleMessagesLike = async (idMessage, liked) => {
    const newMessages = messagesGet.map((msg) => {
      let likedm = msg.liked === 0 ? 1 : 0
      if (msg.id === idMessage) return { ...msg, liked: likedm };
      return msg;
    });
    axios
      .post("/api/messages/like/", {
        id: idMessage,
        liked: liked
      })
      .then((response) => { setMessagesGet(newMessages); })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const handleDeleteMessage = async (id) => {
    const newMsg = messagesSend.filter(msg => msg.id !== id)
    axios
      .post("/api/messages/remove/", {
        id: id
      })
      .then((response) => setMessagesSend(newMsg))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <Router>
      <div className="App">
        <Menu className="menuArea" user={gitUser} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact render={() => localStorage.getItem('user-login') !== null ? (<Profile user={gitUser} posts={posts} handleAddPost={handleAddPost} handlePostLike={handlePostLike} handleDeletePost={handleDeletePost} />) : (<Login />)} />
          <Route path="/profile" exact render={() => localStorage.getItem('user-login') !== null ? (<Profile user={gitUser} posts={posts} handleAddPost={handleAddPost} handlePostLike={handlePostLike} handleDeletePost={handleDeletePost} />) : (<Login />)} />
          <Route path="/messages" render={() => localStorage.getItem('user-login') !== null ? (<Messages handleDeleteMessage={handleDeleteMessage} handleMessagesLike={handleMessagesLike} messagesSend={messagesSend} messagesGet={messagesGet} user={gitUser} handleAddMesssage={handleAddMesssage} />) : (<Login />)} />
          <Route path="/followers" render={() => localStorage.getItem('user-login') !== null ? (<FollowersPage user={gitUser} />) : (<Login />)} />
          <Route path="/following" render={() => localStorage.getItem('user-login') !== null ? (<FollowingPage user={gitUser} />) : (<Login />)} />
          <Route path="/SignIn" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import Box from "../components/Box";
import React, { useState, useEffect } from 'react'

export default function Messages({ title = "Mensagens", user, handleAddMesssage, messagesGet, messagesSend, handleMessagesLike, handleDeleteMessage }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/allusers/")
      .then(res => res.json()).then(res => {
        setUsers(res)
        console.log(res)
      })
  }, []);

  return (
    <div className='container'>
      <Box>
        <div className="col-md-12 text-center">
          <h2 className="">Mandar uma mensagem</h2>
        </div>
        <form
          onSubmit={function handleSetNewMesssage(e) {
            e.preventDefault();
            const dadosform = new FormData(e.target);
            const message = {
              userName: user.username,
              userImage: user.image,
              imageUrl: user.image,
              id_user_from: user.id,
              id_user_to: dadosform.get("id_user_to"),
              postid: new Date().toISOString(),
              liked: false,
              message: dadosform.get("message"),
              title: dadosform.get("title"),
            };

            const dataMessage = {
              title: message.title,
              id_user_from: message.id_user_from,
              id_user_to: message.id_user_to,
              message: message.message
            }
            console.log(dataMessage)
            handleAddMesssage(
              dataMessage
            );

          }}
        >
          <label>Para quem?</label>
          <select name="id_user_to">
            {typeof users === "undefined" || users.lenght <= 0 ? (
              <p>Loadding..</p>
            ) : (
              users.map((user) => (
                <option value={user.id}>{user.username} ({user.name})</option>
              ))
            )}
          </select>
          <input
            type="text"
            name="title"
            placeholder="Titulo da mensagem"
          />
          <textarea name="message" placeholder="Mensagem"></textarea>
          <button className="full-w">Enviar mensagem</button>
        </form>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <Box className="text-center">
            <h3>Enviadas</h3>
          </Box>
          {messagesSend.lenght === 0 ? (
            <Box>
              <p style="color:white">Loading..</p>
            </Box>
          ) : (
            messagesSend.map((post) => (
              <Box key={post.id}>
                <div className="post">
                  <div className="post-header flex justify-between">
                    <div className="flex">
                      <img
                        alt="postimage"
                        className="post-header_icon"
                        src={user.image}
                        style={{ width: "50px" }}
                      />
                      <div className="post-header_user align-center">
                        {user.name} &gt; {post.username}
                      </div>
                    </div>
                  </div>
                  <div className="post flex justify-between">
                    <div className="post-content">
                      <div className="post-content_title">{post.title}</div>
                      <div className="post-content_content">
                        <div className="post-content_content-msg">
                          {post.message}
                        </div>
                        <div className="post-content_content-btns">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeleteMessage(post.id);
                            }}
                            style={{ backgroundColor: "red" }}
                          >
                            {" "}
                            Remover
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </Box>
            ))
          )}
        </div>
        <div className="col-md-6">
          <Box className="text-center">
            <h3>Recebidas</h3>
          </Box>
          {messagesGet.lenght === 0 ? (
            <Box>
              <p style="color:white">Loading..</p>
            </Box>
          ) : (
            messagesGet.map((post) => (
              <Box key={post.id}>
                <div className="post">
                  <div className="post-header flex justify-between">
                    <div className="flex">
                      <img
                        alt="postimage"
                        className="post-header_icon"
                        src={post.image}
                        style={{ width: "50px" }}
                      />
                      <div className="post-header_user align-center">
                        {post.username} &gt; {user.name}
                      </div>
                    </div>
                  </div>
                  <div className="post flex justify-between">
                    <div className="post-content">
                      <div className="post-content_title">{post.title}</div>
                      <div className="post-content_content">
                        <div className="post-content_content-msg">
                          {post.message}
                        </div>
                        <div className="post-content_content-btns">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleMessagesLike(post.id, post.liked);
                            }}
                            style={
                              post.liked === 1
                                ? { backgroundColor: "#7fff00" }
                                : { backgroundColor: "grey" }
                            }
                          >
                            {post.liked === 1 ? "Curtido" : "Curtir"}
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </Box>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

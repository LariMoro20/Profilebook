import React, { useEffect } from 'react'
import Box from "../components/Box";
import ProfileSidebar from "../components/ProfileSidebar";

export default function Profile({
  title = "ProfileBook",
  posts,
  user,
  handleDeletePost,
  handleAddPost,
  handlePostLike
}) {

  return (
    <>
      <div className='container'>
        <div className='row profile'>
          <div className="profile_sidebar col-lg-3 col-12" style={{ gridArea: "profileArea" }}>
            <ProfileSidebar githubUser={user} />
          </div>
          <div className="profile_content col-lg-9 col-12" style={{ gridArea: "welcomeArea" }}>
            <Box>
              <h1 className="title flex justify-center">
                Bem vindo(a) {user.name}
              </h1>
            </Box>
            <Box>
              <h2 className="subTitle">O que você deseja fazer?</h2>
              <form
                onSubmit={function handleSetNewPost(e) {
                  e.preventDefault();
                  const dadosform = new FormData(e.target);
                  const postagem = {
                    userName: user.username,
                    userImage: user.image,
                    imageUrl: user.image,
                    id_user: user.id,
                    postid: new Date().toISOString(),
                    liked: false,
                    description: dadosform.get("description"),
                    title: dadosform.get("title"),
                    tagUrl: dadosform.get("title").replace(" ", "_"),
                  };
                  handleAddPost(
                    postagem.title,
                    postagem.id_user,
                    postagem.description
                  );
                }}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Titulo da postagem"
                />
                <textarea name="description"></textarea>
                <button className="full-w">Criar postagem</button>
              </form>
            </Box>
            {typeof posts === "undefined" || posts.lenght <= 0 ? (
              <p>Loadding..</p>
            ) : (
              posts.map((post) => (
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
                          {user.username}
                        </div>
                      </div>
                      <div className="post-links flex align-center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeletePost(post.id);
                          }}
                          style={{ backgroundColor: "red" }}
                        >
                          {" "}
                          Remover
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlePostLike(post.id, post.liked);
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
                    <div className="post flex justify-between">
                      <div className="post-content">
                        <div className="post-content_title">{post.title}</div>
                        <div className="post-content_content">
                          {post.description}
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
    </>
  );
}

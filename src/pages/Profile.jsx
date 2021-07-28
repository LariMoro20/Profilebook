import React from "react";
import Box from "../components/Box";
import MainGrid from "../components/MainGrid";
function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img
        alt="user profile"
        src={`https://github.com/${props.githubUser.login}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <a
        className="boxLink"
        href={`https://github.com/${props.githubUser.login}`}
      >
        @{props.githubUser.login}
      </a>
      <hr />
      <h2 className="smallTitle">Sobre mim</h2>
      <small>{props.githubUser.location}</small>
      <p>{props.githubUser.bio}</p>
    </Box>
  );
}

export default function Profile({ title = "ProfileBook" }) {
  const [profile, setProfile] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  function handlePostDelete(id) {
    console.log(posts);
    const newPosts = posts.filter((post) => post.userId !== id);
    setPosts(newPosts);
  }
  function handlePostLike(id) {
    const newPosts = posts.map((post) => {
      if (post.userId === id) return { ...post, liked: !post.liked };
      return post;
    });
    setPosts(newPosts);
  }

  React.useEffect(() => {
    fetch("https://api.github.com/users/LariMoro20")
      .then((res) => {
        return res.json();
      })
      .then((respComplete) => {
        setProfile(respComplete);
      });
  }, []);

  return (
    <>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={profile} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title flex justify-center">
              Bem vindo(a) {profile.name}
            </h1>
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleSetNewPost(e) {
                e.preventDefault();
                const dadosform = new FormData(e.target);
                const postagem = {
                  userName: profile.login,
                  userImage: profile.avatar_url,
                  imageUrl: profile.avatar_url,
                  userId: new Date().toISOString(),
                  liked: false,
                  content: dadosform.get("content"),
                  title: dadosform.get("title"),
                  tagUrl: dadosform.get("title").replace(" ", "_"),
                };
                const newpost = [...posts, postagem];
                setPosts(newpost);
              }}
            >
              <input
                type="text"
                name="title"
                placeholder="Titulo da postagem"
              />
              <textarea name="content"></textarea>
              <button className="full-w">Criar postagem</button>
            </form>
          </Box>
          {posts.map((post) => {
            return (
              <Box key={post.userId}>
                <div className="post">
                  <div className="post-header flex justify-between">
                    <div className="flex">
                      <img
                        alt="postimage"
                        className="post-header_icon"
                        src={post.userImage}
                        style={{ width: "50px" }}
                      />
                      <div className="post-header_user align-center">
                        {post.userName}
                      </div>
                    </div>
                    <div className="post-links flex align-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handlePostDelete(post.userId);
                        }}
                        style={{ backgroundColor: "red" }}
                      >
                        {" "}
                        Remover
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handlePostLike(post.userId);
                        }}
                        style={
                          post.liked
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "grey" }
                        }
                      >
                        {post.liked ? "Curtido" : "Curtir"}
                      </button>
                    </div>
                  </div>
                  <div className="post flex justify-between">
                    <div className="post-content">
                      <div className="post-content_title">{post.title}</div>
                      <div className="post-content_content">{post.content}</div>
                    </div>
                  </div>
                </div>
              </Box>
            );
          })}
        </div>
      </MainGrid>
    </>
  );
}

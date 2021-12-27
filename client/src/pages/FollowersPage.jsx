import Box from "../components/Box";
import React from "react";
import ProfileRelations from "../components/ProfileRelations";

export default function Followers({ user }) {
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/" + user.username + "/followers")
      .then((res) => {
        return res.json();
      })
      .then((respComplete) => {
        setFollowers(respComplete);
      });
  }, []);
  return (
    <div className='container'>
      <Box className="followersArea">
        <ProfileRelations items={followers} title="Seus seguidores" />
      </Box>
    </div>
  );
}

import Box from "../components/Box";
import React from "react";
import ProfileRelations from "../components/ProfileRelations";

export default function FollowingPage({ user }) {
  const [following, setFollowing] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/" + user.username + "/following")
      .then((res) => {
        return res.json();
      })
      .then((respComplete) => {
        setFollowing(respComplete);
      });
  }, []);
  return (
    <div className='container'>
      <Box className="folloingArea">
        <ProfileRelations items={following} title="Você está seguindo" />
      </Box>
    </div>
  );
}

import Box from "../components/Box";
import React from "react";
import ProfileRelations from "../components/ProfileRelations";
import MainGrid from "../components/MainGrid";

export default function Followers(props) {
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/LariMoro20/followers")
      .then((res) => {
        return res.json();
      })
      .then((respComplete) => {
        setFollowers(respComplete);
      });
  }, []);
  return (
    <MainGrid>
      <Box className="followersArea">
        <ProfileRelations items={followers} title="Seus seguidores" />
      </Box>
    </MainGrid>
  );
}

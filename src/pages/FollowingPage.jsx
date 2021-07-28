import Box from "../components/Box";
import React from "react";
import ProfileRelations from "../components/ProfileRelations";
import MainGrid from "../components/MainGrid";

export default function FollowingPage(props) {
  const [following, setFollowing] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/LariMoro20/following")
      .then((res) => {
        return res.json();
      })
      .then((respComplete) => {
        setFollowing(respComplete);
      });
  }, []);
  return (
    <MainGrid>
      <Box className="folloingArea">
        <ProfileRelations items={following} title="Você está seguindo" />
      </Box>
    </MainGrid>
  );
}

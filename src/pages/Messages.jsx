import Box from "../components/Box";
import React from "react";
import MainGrid from "../components/MainGrid";

export default function Messages({ title = "ProfileBook" }) {
  return (
    <MainGrid>
      <Box className="messagesArea">
        <h1 className="title flex justify-center">Em breve</h1>
      </Box>
    </MainGrid>
  );
}

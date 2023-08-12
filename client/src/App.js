import { Box, styled } from "@mui/material";

import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

// Components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";
import Articles from "./Components/Articles";

const Container = styled(Box)(({ theme }) => ({
  width: "65%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%", // Change width to 75% at 'md' (960px) and below
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%", // Change width to 85% at 'sm' (600px) and below
  },
}));
function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Box>
      <Header />
      <LoadingBar
        height={4}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Container>
        <InfoHeader />
        <Articles setProgress={setProgress} />
      </Container>
    </Box>
  );
}

export default App;

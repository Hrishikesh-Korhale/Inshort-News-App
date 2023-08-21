import { Box, styled } from "@mui/material";

import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";
import Articles from "./Components/Articles";
import {routePath} from "./constants/routes";

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
    <BrowserRouter>
      <Header />
      <LoadingBar
        height={4}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Container>
        <InfoHeader />
        <Routes>
        <Route
          path={routePath.newstypes}
          element={<Articles setProgress={setProgress} />}
        />
        <Route
          path={routePath.invalid}
          element={<Articles setProgress={setProgress} />}
        />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

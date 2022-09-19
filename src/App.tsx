import React from "react";
import { Body } from "components/Body";
import { Header } from "components/Header";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container height="100%">
      <Header />
      <Body />
    </Grid>
  );
}

export default App;

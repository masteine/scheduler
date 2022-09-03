import React from "react";
import { Body } from "components/Body";
import { Header } from "components/Header";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container xs={12}>
      <Header />
      <Body />
    </Grid>
  );
}

export default App;

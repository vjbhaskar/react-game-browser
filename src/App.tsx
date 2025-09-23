import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Grid } from "@mui/material";
import { Widgets } from "@mui/icons-material";
import NavBar from "./components/NavBar";
import {
  createTheme,
  ThemeProvider,
  useColorScheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useTheme from "./hooks/useTheme";
import GameGrid from "./components/GameGrid";

function App() {
  const { theme, isDark, onToggleTheme } = useTheme();

  console.log("in APP");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Grid container direction="column" spacing={5}>
          {/* <Grid size={12}>Debba 1</Grid> */}
          <NavBar toggleTheme={onToggleTheme} currentMode={isDark} />
          <Grid display="flex" size={12} direction="row">
            <Grid size={6}>Debba 2 {`debba${isDark}`}</Grid>
            <GameGrid />
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

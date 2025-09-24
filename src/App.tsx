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
import GenreList from "./components/GenreList";
import { Genre, Platform } from "./utilities/types";
import PlatFormList from "./components/PlatformList";
function App() {
  const { theme, isDark, onToggleTheme } = useTheme();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<
    Platform["id"] | null
  >(null);

  console.log("in APP");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Grid container direction="column" spacing={5}>
          {/* <Grid size={12}>Debba 1</Grid> */}
          <NavBar toggleTheme={onToggleTheme} currentMode={isDark} />
          <Grid display="flex" size={12} container direction="row">
            <Grid size={{ xs: 0, md: 2, lg: 2, xl: 2 }}>
              <GenreList
                selectedGenre={selectedGenre}
                onGenreSelected={(genre) => setSelectedGenre(genre)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 10, lg: 10, xl: 10 }}>
              <Grid>
                <PlatFormList
                  selectedPlatform={selectedPlatform}
                  onSelectedPlatform={(id) => setSelectedPlatform(id)}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexFlow: "wrap",
                }}
              >
                <GameGrid
                  selectedGenre={selectedGenre}
                  selectedPlatform={selectedPlatform}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

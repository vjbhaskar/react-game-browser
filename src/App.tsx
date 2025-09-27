import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useTheme from "./hooks/useTheme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { GameQuery } from "./utilities/types";
import PlatFormList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const { theme, isDark, onToggleTheme } = useTheme();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  console.log("in APP");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Grid container direction="column" spacing={5}>
          {/* <Grid size={12}>Debba 1</Grid> */}
          <NavBar
            toggleTheme={onToggleTheme}
            currentMode={isDark}
            onSearchSubmit={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
          <Grid display="flex" size={12} container direction="row">
            <Grid
              size={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <GenreList
                selectedGenre={gameQuery.genre}
                onGenreSelected={(genre) =>
                  setGameQuery({ ...gameQuery, genre })
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10, xl: 10 }}>
              <Grid>
                <GameHeading gameQuery={gameQuery} />
              </Grid>
              <Grid>
                <PlatFormList
                  selectedPlatform={gameQuery.platform}
                  onSelectedPlatform={(id) =>
                    setGameQuery({ ...gameQuery, platform: id })
                  }
                />
                <SortSelector
                  selectedSort={gameQuery.sortOrder}
                  onSelectedSort={(sortVal) => {
                    setGameQuery({ ...gameQuery, sortOrder: sortVal });
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexFlow: "wrap",
                }}
              >
                <GameGrid gameQuery={gameQuery} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

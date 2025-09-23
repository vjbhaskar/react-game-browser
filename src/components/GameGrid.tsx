import { Grid, Skeleton, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, errorMessage, isLoading } = useGames();
  const dummyGamesList = new Array(
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18
  );
  return (
    <>
      {errorMessage && <Typography> {errorMessage} </Typography>}
      {isLoading &&
        dummyGamesList.map((n) => {
          return (
            <Grid size={{ xs: 8, md: 4, lg: 4, xl: 3 }} sx={{ mb: 1.5 }}>
              <GameCardSkeleton key={n} />
            </Grid>
          );
        })}

      {!isLoading &&
        games.map((g) => (
          <Grid size={{ xs: 8, md: 4, lg: 4, xl: 3 }} sx={{ mb: 1.5 }}>
            <GameCard key={g.id} game={g} />
          </Grid>
        ))}
    </>
  );
};

export default GameGrid;

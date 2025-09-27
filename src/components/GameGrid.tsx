import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { dummyList } from "../utilities/staticData";
import { GameQuery } from "../utilities/types";

interface GameGridProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, errorMessage, isLoading } = useGames(gameQuery);

  return (
    <>
      {errorMessage && <Typography> {errorMessage} </Typography>}
      {isLoading &&
        dummyList.map((n, index) => {
          return (
            <Grid
              key={index}
              size={{ xs: 8, md: 4, lg: 4, xl: 3 }}
              sx={{ mb: 1.5 }}
            >
              <GameCardSkeleton key={n} />
            </Grid>
          );
        })}

      {!isLoading &&
        data.map((g) => (
          <Grid
            key={g.id}
            size={{ xs: 8, md: 4, lg: 4, xl: 3 }}
            sx={{ mb: 1.5 }}
          >
            <GameCard key={g.id} game={g} />
          </Grid>
        ))}
    </>
  );
};

export default GameGrid;

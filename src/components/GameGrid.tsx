import { Grid, Skeleton, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { dummyList } from "../utilities/staticData";
import { Genre, Platform } from "../utilities/types";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform["id"] | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, errorMessage, isLoading } = useGames(
    selectedGenre,
    selectedPlatform
  );

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

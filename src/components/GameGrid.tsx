import { Typography } from "@mui/material";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, errorMessage } = useGames();
  return (
    <>
      {errorMessage && <Typography> {errorMessage} </Typography>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

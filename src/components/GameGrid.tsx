import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { gameApiResponse, Game } from "../utilities/types";
import { Typography } from "@mui/material";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<gameApiResponse>("/games")
      .then((resp) => {
        setGames(resp.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

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

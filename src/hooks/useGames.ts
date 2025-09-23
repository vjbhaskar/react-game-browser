import { useEffect, useState } from "react";
import { Game, gameApiResponse } from "../utilities/types";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<gameApiResponse>("/games", { signal: controller.signal })
      .then((resp) => {
        setGames(resp.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errorMessage };
};

export default useGames;

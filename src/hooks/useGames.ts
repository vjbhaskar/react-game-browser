import { useEffect, useState } from "react";
import { Game, gameApiResponse } from "../utilities/types";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<gameApiResponse>("/games", { signal: controller.signal })
      .then((resp) => {
        setGames(resp.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, isLoading, errorMessage };
};

export default useGames;

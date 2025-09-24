import { Game, gameApiResponse, Genre, Platform } from "../utilities/types";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform["id"] | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform } },
    [selectedGenre?.id, selectedPlatform]
  );

export default useGames;

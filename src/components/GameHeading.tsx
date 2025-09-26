import { Typography } from "@mui/material";
import { GameQuery } from "../utilities/types";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery?.platform || ""} ${gameQuery.genre?.name || ""}`;
  return <Typography variant="h3">Games {heading}</Typography>;
};

export default GameHeading;

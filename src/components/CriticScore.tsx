import { Typography } from "@mui/material";

interface CriticScoreProps {
  criticScore: number;
}

const CriticScore = ({ criticScore }: CriticScoreProps) => {
  const getCirtColor = () => {
    if (criticScore >= 85) return "success";
    if (criticScore >= 50 && criticScore < 85) return "warning";
    if (criticScore <= 50) return "danger";
  };

  return <Typography color={getCirtColor()}>{criticScore}</Typography>;
};

export default CriticScore;

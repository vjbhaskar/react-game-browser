import Paper from "@mui/material/Paper";
import { Game } from "../utilities/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlatformIconList from "./PlatformIconList";
import Grid from "@mui/material/Grid";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  console.log(game.parent_platforms);
  console.log(game.parent_platforms.map((p) => p.platform));
  return (
    <Paper elevation={3}>
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 220 }}
          image={getCroppedImageUrl(game.background_image)}
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {game.name}
          </Typography>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Grid>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
            </Grid>
            <CriticScore criticScore={game.metacritic}></CriticScore>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default GameCard;

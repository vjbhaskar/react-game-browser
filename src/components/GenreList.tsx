import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../utilities/types";

interface GenreListProps {
  onGenreSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelected, selectedGenre }: GenreListProps) => {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && (
        <List>
          <GenreListSkeleton />
        </List>
      )}
      {!isLoading && (
        <List>
          {data.map((g) => (
            <ListItem key={g.id} alignItems="flex-start">
              <ListItemButton onClick={() => onGenreSelected(g)}>
                <ListItemAvatar>
                  <Avatar
                    src={getCroppedImageUrl(g.image_background, 600, 400)}
                    variant="square"
                    sx={{ width: 50, height: 50 }}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography
                    sx={{
                      fontWeight: g.id === selectedGenre?.id ? "600" : "200",
                      margin: "14px",
                    }}
                  >
                    {g.name}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;

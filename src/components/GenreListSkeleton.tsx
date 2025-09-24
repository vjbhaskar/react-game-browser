import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Skeleton,
  ListItemText,
} from "@mui/material";
import { dummyList } from "../utilities/staticData";
const GenreListSkeleton = () => {
  return (
    <>
      {dummyList.map((listItem, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemButton>
            <ListItemAvatar>
              <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default GenreListSkeleton;

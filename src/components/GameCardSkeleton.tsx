import { Card, CardContent, Paper, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Paper elevation={3}>
      <Card>
        <Skeleton variant="rectangular" width={410} height={300} />
        <CardContent>
          <Skeleton variant="text" />
        </CardContent>
      </Card>
    </Paper>
  );
};

export default GameCardSkeleton;

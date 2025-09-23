export interface Game {
  id: number;
  name: string;
}

export interface gameApiResponse {
  count: number;
  results: Game[];
}

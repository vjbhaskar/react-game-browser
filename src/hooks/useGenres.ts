import { Genre } from "../utilities/types";

import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;

import { fetchMediaWithCache } from "../common/fetchMediaCache";
import { peliculasMapper } from "../../../adapters/mappers/peliculasMapper";

export const fetchPeliculasHome = () => fetchMediaWithCache('movie', peliculasMapper);

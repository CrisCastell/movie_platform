import { fetchMediaWithCache } from "../common/fetchMediaCache";
import { tvShowsMapper } from "../../../adapters/mappers/tvShowsMapper";

export const fetchTvShowsHome = () => fetchMediaWithCache('tv', tvShowsMapper);

import { MediaItem } from './MediaItem';

export class TvShow extends MediaItem{
    constructor(id, title, backdropPath, posterPath, overview, popularity, releaseDate) {
        super(id, title, backdropPath, posterPath, overview, popularity, releaseDate, 'Tv Show');
    }
    
}
import { MediaItem } from './MediaItem';

export class Pelicula extends MediaItem{
    constructor(id, title, backdropPath, posterPath, overview, popularity, releaseDate) {
        super(id, title, backdropPath, posterPath, overview, popularity, releaseDate, 'Pelicula');
    }
}
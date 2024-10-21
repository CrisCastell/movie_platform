export class MediaItem {
    constructor(id, title, backdropPath, posterPath, overview, popularity, releaseDate, mediaType) {
        this.id = id;
        this.title = title;
        this.backdropPath = backdropPath;
        this.posterPath = posterPath;
        this.overview = overview;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.mediaType = mediaType;
    }
  
    getFormattedReleaseDate() {
      return new Date(this.releaseDate).toLocaleDateString();
    }
}
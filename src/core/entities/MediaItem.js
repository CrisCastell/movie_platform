export class MediaItem {
    constructor(id, title, backdropPath, posterPath, overview, popularity, releaseDate, mediaType, voteAverage) {
        this.id = id;
        this.title = title;
        this.backdropPath = backdropPath ? 
                            `https://image.tmdb.org/t/p/w1280${backdropPath}` : 
                            "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE=";
        this.posterPath = posterPath;
        this.overview = overview;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.mediaType = mediaType;
        this.voteAverage = voteAverage;
    }
  
    getFormattedReleaseDate() {
      return new Date(this.releaseDate).toLocaleDateString();
    }
}
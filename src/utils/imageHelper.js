const REACT_APP_API_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280'


export const imageSetter = (elem) => {
    return elem ? 
    REACT_APP_API_IMAGE_URL + elem : 
        "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE="
}
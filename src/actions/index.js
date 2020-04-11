// {
//     type: 'ADD_MOVIES'
// }
// {
//     type: ''
// }

//action type vars
export const ADD_MOVIES = 'ADD_MOVIES';

//action creator func.
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies:movies
    }
}
import { endpoint } from '../helpers/url'

const getMovieByName = async(name) => {

    const resp = await fetch(endpoint)
    const movies = await resp.json()

    name = name.toLocaleLowerCase()
    return movies.results.filter(movie => movie.name.toLocaleLowerCase().includes(name))
};

export default getMovieByName;

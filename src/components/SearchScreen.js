import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useForm from '../hooks/useForm'
import querystring from 'query-string'
// import getMovieByName from '../selectors/getMovieByName'
import { MovieCard } from './MovieCard'
import '../styles/style.css'
import { endpoint } from '../helpers/url'

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [moviesFiltered, setMoviesFiltered] = useState([])
    // console.log(location.search)

    const {q = ''} = (querystring.parse(location.search))
    // console.log(q)

    const [values, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = values

    useEffect(() => {
        getData()        
    }, []);

    const getData = async() => {

        const resp = await fetch(endpoint)
        const movies = await resp.json()
    
        setMoviesFiltered(movies.results)
    }
 
    // setMoviesFiltered(getMovieByName(searchText))

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchText)
        navigate(`?q=${searchText}`)
        // resetForm()
    }

    return (
        <div>
              <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5 container-busqueda">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your Star Wars character"
                            className="form-control estilo-busqueda"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                     
                    </form>
                </div>

                <h4> Characters </h4>
                <hr />
                <div className="filas">

                    {
                        moviesFiltered.map(movie => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                name={movie.name}
                                image={movie.image}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

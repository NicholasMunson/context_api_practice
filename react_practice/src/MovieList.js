import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
import { Movie } from './Movie.js'

export const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <>
            {movies.map(movie => [
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ])}
        </>
    )
}

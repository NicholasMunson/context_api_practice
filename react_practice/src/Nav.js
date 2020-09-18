import React, { useContext } from 'react'
import {MovieContext} from './MovieContext'

export const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className='nav'>
            <h3>Movies List</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

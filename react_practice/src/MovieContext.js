import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Lord Of The Rings',
            price: '$20',
            id: 12340
        },
        {
            name: 'Fight Club',
            price: '$20',
            id: 3959
        },
        {
            name: 'Hancock',
            price: '$20',
            id: 46393
        }                
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

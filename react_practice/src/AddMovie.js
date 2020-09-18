import React, {useContext, useState} from 'react'
import { MovieContext } from './MovieContext'

export const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }    

    const submitForm = (e) => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {
            name: name,
            price: price
        }])
    }


    return (
        <form onSubmit={submitForm}>
            <input type='text' name='name' value={name} onChange={updateName} />
            <input type='text' name='price'value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

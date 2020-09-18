import React from 'react'

export const Movie = ({name, price, id}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
        </>
    )
}

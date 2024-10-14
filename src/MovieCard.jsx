import React from 'react'

const MovieCard = ({ Title, Year, Poster, Type }) => {
    console.log('MovieCard', Title, Year, Poster, Type)
    return (
        <div className='movie'>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster != 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
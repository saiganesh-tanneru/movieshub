import React, { useEffect, useState } from 'react';
import "./App.css"
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?apikey=d7120dd2'
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title) => {
        if (!title) return
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("batman")

    }, [])

    return (
        <div className='app'>
            <h1>Movie Land</h1>
            <div className="search">
                <input type="text" placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img src={SearchIcon} alt='search' onClick={() => { searchMovies(searchTerm) }} />
            </div>
            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map(movie => (
                        <MovieCard {...movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <p>No movies found.</p>
                </div>
            )}
        </div>
    )
}

export default App;
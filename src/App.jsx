import React ,{ useState, useEffect } from 'react'
import searchIcon from './search.svg'
import './App.css'
import MovieCard from './MovieCard'
//681aff63
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=681aff63'
  const seachMovies = async (searchValue) => {
    const resp = await fetch(`${API_URL}&s=${searchValue}`);
    const data = await resp.json();
    setMovies(data.Search);
  }
   useEffect(() => {
    seachMovies('avengers');
   }, [])
  return (
    <>
    <div className='app'>
      <h1>FlimLand</h1>
      <div className='search'>
        <input type="text" placeholder='Search For Movie' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <img src={searchIcon} alt="Search" onClick={() =>{
          seachMovies(searchValue)}}/>
      </div>
    {movies.length > 0 ? (
    <div className='container'>
      {movies.map((movie) => <MovieCard  movie={movie}/>)}
    </div>) : (<div className='empty'>
      <p>Movie Not Found</p>
      </div>)
    }
    </div>  
    </>
  )
}

export default App

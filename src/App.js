import {useEffect, useState} from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCards from './movieCards';

//69fd9d01
const API_URL = 'http://www.omdbapi.com?apikey=69fd9d01';

const App = ()=>{

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search);
  }

  useEffect(()=>{
  },[]);

  return (
    <div className='app'>
      <h1>Movie Maniacs</h1>

      <div className='search'>
        <input placeholder='Search your favourite movies' value = {searchTerm} onChange = {(e)=>{ setSearchTerm(e.target.value)}}></input>
        <img src = {searchIcon} alt ='search' onClick={()=>{ searchMovies(searchTerm)}} ></img>
      </div>

      {movies?.length >0 ?(
          <div className='container'>
            {
              movies.map((movie)=>{
                console.log(movie);
                return <MovieCards movie = {movie} />
              })
            }
          </div>
        ):(
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

      
    </div>
  )
}
export default App;

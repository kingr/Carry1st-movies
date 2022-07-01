import React, { useEffect, useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [search, setSearch] = useState({});
  const [movies, setMovies] = useState([]);
  // const [results, setResults] = useState("");

  const addMovie = (name, rating, duration) => {
    setMovies(prevVal => [...prevVal, {name, rating, duration}]);
  }

  useEffect(() => {
    if (search.length >= 2) {
      const searchedMovies = movies.filter(({name}) => {
        return name.includes(search);
      })
      setMovies(searchedMovies);
    }
  },[search,movies])

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addMovie={addMovie} />
        </div>
        <div className='layout-column w-30'>
          <Search search={search} setSearch={setSearch} />
          {movies.length > 0 ? <Movieslist movies={movies} /> : null }
          {search.length >= 2 && 
            (<>
              <div data-testid='noResult'>
                <h3 className='text-center'>No Results Found</h3>
              </div></>
              )}
        </div>
      </div> 
    </div>
  )
}

export default App;

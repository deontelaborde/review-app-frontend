import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

import Home from './pages/Home'
import Nav from './components/Nav'
import MovieDetails from './pages/MovieDetails'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  let navigate = useNavigate()

  //Get All Movies
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(`${BASE_URL}/movies`)
      setMovies(res.data)
      // console.log(res.data)
    }
    getMovies()
  }, [])

  //Click Movie
  const chooseMovie = (selected) => {
    setSelectedMovie(selected)
    navigate(`/movies/${selected.id}`)
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} chooseMovie={chooseMovie} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails selectedMovie={selectedMovie} />}
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

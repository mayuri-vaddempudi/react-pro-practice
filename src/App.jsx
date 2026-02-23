import Header from './components/Header'
import MovieContainer from './components/MovieContainer'
import GenreContainer from './components/GenreContainer'

const headerObject = {
  title: "Robert's Movie Page!!",
  childProp: "Maybe the best movie reviews on the net",
}

const genres = ["adventure", "action", "awesome"]

function App() {
  return (
    <>
      <Header {...headerObject} />
      <MovieContainer />
      {genres.map((movieGenre, index) => <GenreContainer key={index} genre={movieGenre} />)}
    </>
  )
}

export default App
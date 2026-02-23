import Movie from '../Movie'
import styles from './moviecontainer.module.css'
import movies from '../../data/movies.js'

const MovieContainer = () => {
    return (
        <div className={styles.movieContainer}>
            {movies.map((movie, index) => (
                <Movie key={index} {...movie} />)
            )}
        </div>
    )
}

export default MovieContainer
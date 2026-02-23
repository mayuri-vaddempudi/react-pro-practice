import styles from './genre.module.css'
import movies from '../../data/movies'
import Movie from '../Movie'

const GenreContainer = ({ genre }) => {
    return (
        <div className={styles.genre}>
            <h3 className={styles.genreTitle}>{genre}</h3>
            {movies.filter(movie => movie.movieGenre === genre)
                .map((movie, index) => <Movie key={index} {...movie} />)}
        </div>
    )
}

export default GenreContainer
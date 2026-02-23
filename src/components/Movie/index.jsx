import styles from './movies.module.css'
import Cast from '../Cast'
import { getImageURL } from '../../utils/functions.js'

const Movie = ({ movieTitle, movieGenre = "action", movieDescription, mainActor, supportingActor, movieImage }) => {
    return (
        <div className={styles.movie}>
            <h3 className={styles.movieTitle}>{movieTitle}</h3>

            {/*displayImage(movieImage)*/}
            {movieImage ? <img className={styles.movieImage} src={getImageURL(movieImage)} />
                : <img className={styles.movieImage} src={getImageURL('ghibli.png')} />}

            <p className={styles.movieGenre}>Genre: {movieGenre}</p>
            <Cast mainCast={mainActor} supportingCast={supportingActor} />
            <p className={styles.movieDescription}>{movieDescription}</p>
        </div>
    )
}

export default Movie
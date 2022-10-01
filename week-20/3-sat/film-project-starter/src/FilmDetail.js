import './FilmDetail.css'
import { TMDB, TMDB_API_KEY } from './TMDB'
import axios from 'axios';

export function FilmDetail(props) {
  return (
    <div className="FilmDetail is-hydrated">
      <figure className="film-backdrop">
        <img src={`https://image.tmdb.org/t/p/w1280${props.details.backdrop_path}`} alt="Baby Driver backdrop" />
        <h1 className="film-title">{props.details.title}</h1>
      </figure>

      <div className="film-meta">
        <p className="film-detail-overview">
          <img src={`https://image.tmdb.org/t/p/w780${props.details.poster_path}`} className="film-detail-poster" alt={`${props.details.title}poster`} />
          <p>{props.details.tagline}</p>
          <p>{props.details.overview}</p>
        </p>
      </div>
    </div>
  )
}

export function FilmDetailEmpty(props) {
  return (
    <div className="FilmDetail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  )
}
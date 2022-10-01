import { FilmDetail, FilmDetailEmpty } from "./FilmDetail";
import FavouritesRows from "./FavouritesRows";
import FilmRow from "./FilmRows";
import { TMDB, TMDB_API_KEY } from './TMDB';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './FilmLibrary.css'


function FilmLibrary() {
  const [movieList, updateMovieList] = useState([]);
  const [movieSelectedOrNot, selectMovie] = useState(false);
  const [favourites, editFavouriteCount] = useState(0);
  const [selectedTab, changeSelectedTab] = useState("ALL");
  const [favouritesArray, editFavourites] = useState([]);
  const [faveClass, changeFaveClass] = useState("film-list-filter");
  const [allMoviesClass, changeAllMoviesClass] = useState("film-list-filter is-active");

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&primary_release_year=2022`;
    console.log('Making api call to TMDB for getting new movies');
    axios(url)
      .then(response => {
        response.data.results.forEach(movie => movie['inQueue'] = false)
        updateMovieList(response.data.results);
      })
  }

  function changeSelected(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
    console.log('Making api call to TMDB to get movie details');
    axios(url)
      .then(response => {
        const { backdrop_path, title, poster_path, tagline, overview } = response.data;
        selectMovie({
          backdrop_path: backdrop_path,
          title: title,
          poster_path: poster_path,
          tagline: tagline,
          overview: overview
        });
      })
  }

  function addToQueue(poster_path, title, year, id) {
    editFavourites([...favouritesArray, {
      id: id,
      poster_path: poster_path,
      title: title,
      year: year
    }]);
    editFavouriteCount(favourites + 1);
  }

  function inQueue(filmID, bool) {
    movieList.filter(movie => movie.id === filmID)[0]['inQueue'] = bool;
  }

  function removeFromQueue(poster_path) {
    editFavourites([...favouritesArray.filter((film) => film.poster_path !== poster_path)]);
    editFavouriteCount(favourites - 1);
  }

  function selectFave() {
    changeFaveClass("film-list-filter is-active");
    changeAllMoviesClass("film-list-filter");
    changeSelectedTab("FAVES");
  }

  function selectAll() {
    changeFaveClass("film-list-filter");
    changeAllMoviesClass("film-list-filter is-active");
    changeSelectedTab("ALL");
  }

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button onClick={selectAll} className={allMoviesClass}>
            ALL
            <span className="section-count">{movieList.length}</span>
          </button>
          <button onClick={selectFave} className={faveClass}>
            FAVES
            <span className="section-count">{favourites}</span>
          </button>
        </div>
        {
          selectedTab === "ALL" ? movieList.map(film => <FilmRow filmDetails={film} selected={changeSelected} addedToQueue={addToQueue} removedFromQueue={removeFromQueue} inQueue={inQueue} />) : <FavouritesRows array={favouritesArray} removedFromQueue={removeFromQueue} inQueue={inQueue} />
        }
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {
          movieSelectedOrNot ? <FilmDetail details={movieSelectedOrNot} /> : <FilmDetailEmpty />
        }
      </div>
    </div>
  );
}

export default FilmLibrary
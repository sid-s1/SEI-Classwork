import './FilmRow.css'

export default function FavouritesRows(props) {
    return (
        props.array.map(film =>
            <div className="FilmRow">
                <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt="{film title} film poster" />
                <div className="film-summary">
                    <h3>{film.title}</h3>
                    <p>{film.year}</p>
                    <div className="actions">
                        <button className="action">
                            <span onClick={() => {
                                props.removedFromQueue(film.poster_path)
                                props.inQueue(film.id, false)
                            }
                            } className="material-icons">remove_from_queue</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}
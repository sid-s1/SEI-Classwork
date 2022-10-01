import './FilmRow.css'
import { useState } from 'react'

export default function FilmRow(props) {
    const [addedToQueue, editQueueAddition] = useState(props.filmDetails.inQueue);
    return (
        <div className="FilmRow">
            <img src={`https://image.tmdb.org/t/p/w780/${props.filmDetails.poster_path}`} alt="{film title} film poster" />
            <div className="film-summary">
                <h3>{props.filmDetails.title}</h3>
                <p>{props.filmDetails.release_date.substring(0, 4)}</p>
                <div className="actions">
                    <button className="action">
                        <span onClick={() => {
                            if (!addedToQueue) {
                                props.addedToQueue(props.filmDetails.poster_path, props.filmDetails.title, props.filmDetails.release_date.substring(0, 4), props.filmDetails.id)
                                props.inQueue(props.filmDetails.id, true)
                            }
                            else {
                                props.removedFromQueue(props.filmDetails.poster_path)
                                props.inQueue(props.filmDetails.id, false)
                            }
                            editQueueAddition(addedToQueue === true ? false : true)
                        }} className="material-icons">{addedToQueue === false ? "add_to_queue" : "remove_from_queue"}</span>
                    </button>
                    <button className="action">
                        <span onClick={() => props.selected(props.filmDetails.id)} className="material-icons">read_more</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
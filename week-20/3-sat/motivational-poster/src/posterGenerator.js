import { useState } from 'react';
import MotivationalPoster from './motivationalPoster';

export default function PosterGenerator(props) {
    const [title, setTitle] = useState(props.person == "Sid" ? "Best" : "Resilience");
    const [message, setMessage] = useState("Stand strong against whatever stands in your way");

    // nothing special about naming above - just a convention - first arg represents default value of the state and the second arg represents the action being performed on that value

    return (
        <div>
            Title: <input onChange={(event) => setTitle(event.target.value)} type="text" />
            Message: <input onChange={(event) => setMessage(event.target.value)} type="text" />
            <MotivationalPoster title={title} subtitle={message} />
        </div>
    )
}
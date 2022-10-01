import { Component } from 'react';

export class Tweet extends Component {
    render() {
        return (
            <div>
                <strong>{this.props.username}</strong>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
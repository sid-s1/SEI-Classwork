import { Component } from 'react';
import './Tweet.css'

export class Tweet extends Component {

  render() {
    return (
      <div className='tweet-item'>
        <strong>{this.props.username}</strong>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
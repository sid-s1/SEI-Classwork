import { Component } from 'react';
import './App.css';
import { Tweet } from './Twitter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          username: "Sarah",
          content: "What's everyone doing on the long weekend?",
        },
        {
          username: "Elise",
          content: "I am so done with today, I can't even...",
        },
        {
          username: "Eugene",
          content: "Cute pupper!!! Hi fren!",
        }
      ],
      tweetInput: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ tweetInput: event.target.value });
  };

  postTweet = () => {
    // this.setState({ tweets: [...this.state.tweets, { username: "Whirlwind", content: this.state.tweetInput }], tweetInput: '' })
    this.setState({ tweets: this.state.tweets.push({ username: "Whirlwind", content: this.state.tweetInput }) })
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.onInputChange} value={this.state.tweetInput}></input>
        <button onClick={this.postTweet}>Tweet</button>
        {
          this.state.tweets.map((tweet, index) => <Tweet key={index} username={tweet.username} content={tweet.content} />)
        }
      </div>
    );
  }
}

export default App;

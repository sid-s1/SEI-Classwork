import { Component } from 'react';
import { Tweet } from './Tweet';
import { ComposeTweet } from './ComposeTweet';

const startingTweets = [
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
  },
];

class MiniTwitter extends Component {
  state = {
    tweets: startingTweets
  };

  addNewTweet(newTweet) {
    this.setState({
      tweets: [newTweet, ...this.state.tweets]
    });
  }

  render() {
    return (
      <div>
        <ComposeTweet addNewTweet={this.addNewTweet.bind(this)} />
        {this.state.tweets.map((tweet, index) => {
          return (
            <Tweet
              key={index}
              username={tweet.username}
              content={tweet.content}
            ></Tweet>
          );
        })}
      </div>
    );
  }
}

export default MiniTwitter;
// or this below way of calling component composetweet to add new tweet
{/* <ComposeTweet addNewTweet={(newTweet) => this.addNewTweet(newTweet)} /> */ }
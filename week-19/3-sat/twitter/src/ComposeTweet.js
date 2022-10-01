import { Component } from "react";

export class ComposeTweet extends Component {
    state = {
        newTweet: ""
    };
    handlePost = () => {
        const tweets = this.state.tweets;
        const newTweet = {
            username: "Joe",
            content: this.state.newTweet,
        };
        this.setState({
            newTweet: "",
        });
        this.props.addNewTweet(newTweet);
    };

    handleInputChange = (event) => {
        const newValue = event.target.value.slice(0, 140);
        this.setState({ newTweet: newValue });
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newTweet}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handlePost}>Post</button>
            </div>
        );
    }
}
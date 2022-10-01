import { Component } from 'react';

export class PushUp extends Component {

    constructor(props) {
        super(props);
        this.state = { count: this.props.count };
    }

    getMessage() {
        let message = '';
        if (this.state.count < 5) {
            message = 'You can do it!';
        }
        else if (this.state.count < 8) {
            message = 'You are doing so well!';
        }
        else if (this.state.count < 10) {
            message = 'Almost there!';
        }
        else {
            message = 'You did it!';
        }
        return message;
    }

    addOne = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>{this.getMessage()}</p>
                <button onClick={this.addOne}>Add One</button>
            </div>
        )
    }
}
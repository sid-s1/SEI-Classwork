import { Component } from 'react';

export class TeamScore extends Component {
    constructor(props) {
        super(props)
        this.state = { runs: this.props.runs, wickets: this.props.wickets, team: this.props.team }
    }
    editScore = (runUpdate, wicketUpdate) => {
        this.setState({ runs: this.state.runs + runUpdate, wickets: this.state.wickets + wicketUpdate });
    }
    changeTeamName = () => {
        const newName = prompt("What would you like this team to be called?");
        if (newName) {
            this.setState({ team: newName })
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.team}</h1>
                <button onClick={this.changeTeamName}>Change team name</button>
                <p>Runs - {this.state.runs}</p>
                <p>Wickets - {this.state.wickets}</p>
                {
                    this.state.wickets === 10 && <p>All out!</p>
                }
                {
                    this.state.wickets !== 10 &&
                    <div>
                        <button onClick={() => this.editScore(1, 0)}>1 run</button>
                        <button onClick={() => this.editScore(4, 0)}>4 runs</button>
                        <button onClick={() => this.editScore(6, 0)}>6 runs</button>
                        <button onClick={() => this.editScore(0, 1)}>WICKET</button>
                    </div>
                }
            </div>
        )
    }
};
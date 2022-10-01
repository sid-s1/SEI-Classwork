import { TeamScore } from './TeamScore';

export class Scoreboard extends TeamScore {
    render() {
        return (
            <div>
                <TeamScore runs={0} wickets={0} team={"A"} />
                <TeamScore runs={0} wickets={0} team={"B"} />
            </div>
        )
    }
}
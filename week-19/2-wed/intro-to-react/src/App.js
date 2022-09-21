import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class DiceRoll extends Component {
  render() {
    return (
      <p>Hello, {this.props.name}, your dice roll is {this.props.roll}{this.props.name === "Sid" ? "!" : ""}</p>
    )
  }
}

function App() {
  // const name = 'Sid';
  // const roll = Math.floor(Math.random() * 6) + 1;
  const rolls = [{
    name: 'Sid',
    roll: Math.floor(Math.random() * 6) + 1
  }, {
    name: 'Lola',
    roll: Math.floor(Math.random() * 6) + 1
  }];
  // `Hello, ${name}, your dice roll is ${roll}`

  const rollArr = [];
  for (let i = 0; i < rolls.length; i++) {
    rollArr.push(<DiceRoll name={rolls[i].name} roll={rolls[i].roll} />)
  }

  return (
    <div>
      {
        rolls.map(roll => <DiceRoll name={roll.name} roll={roll.roll} />)
      }
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// function DiceRoll(props) {
//   return (
//     <p>Hello, {props.name}, your dice roll is {props.roll}</p>
//   )
// }

export default App;

import { Component } from 'react';
import './App.css';

class RatingWidget extends Component {
  render() {
    return (
      <div>
        <section className='rating-section'>
          <p className='rating-category'>{this.props.category}</p>
          <ul className='rating-list'>
            <li onClick={() => this.props.setRating(0)} className={this.props.rating === 0 && 'selected'}>0</li>
            <li onClick={() => this.props.setRating(1)} className={this.props.rating === 1 && 'selected'}>1</li>
            <li onClick={() => this.props.setRating(2)} className={this.props.rating === 2 && 'selected'}>2</li>
            <li onClick={() => this.props.setRating(3)} className={this.props.rating === 3 && 'selected'}>3</li>
            <li onClick={() => this.props.setRating(4)} className={this.props.rating === 4 && 'selected'}>4</li>
          </ul>
        </section>
      </div>
    )
  }

}

class App extends Component {
  sections = ["Food", "Service", "Value for Money"];
  constructor(props) {
    super(props)
    this.state = {
      foodRating: -1,
      serviceRating: -1,
      valueRating: -1
    };
  }

  setFoodRating = (rating) => { this.setState({ foodRating: rating }) }
  setServiceRating = (rating) => { this.setState({ serviceRating: rating }) }
  setValueRating = (rating) => { this.setState({ valueRating: rating }) }

  render() {
    const totalScore = Object.values(this.state).reduce(
      (memo, rating) => memo += rating === -1 ? 0 : rating,
      0
    );
    return (
      <div className="App">
        <h1>Let us know how we did!</h1>
        <RatingWidget category={"Food"} rating={this.state.foodRating} setRating={this.setFoodRating} />
        <RatingWidget category={"Service"} rating={this.state.serviceRating} setRating={this.setServiceRating} />
        <RatingWidget category={"Value for Money"} rating={this.state.valueRating} setRating={this.setValueRating} />
        <h2>Total Score: {totalScore}/12</h2>
      </div>
    );
  }
}

export default App;

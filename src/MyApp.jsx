import React from 'react'
import AppTitle from './AppTitle'
import Lab1App from './Lab1App'

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.a = 0;
    this.b = 0;
  }

  state = {
    array: []
  }

  render() {
    console.time("Render " + this.counter)

    var v = (
      <div>
        <AppTitle />
        <Lab1App />
        <label>A: </label>
        <input type="number" value={this.a} onChange={this.setA} />
        <label>  B: </label>
        <input type="number" value={this.b} onChange={this.setB} />
        <br />
        <p>{this.state.array.toString()}</p>
        <button onClick={this.squareRoot}>Process array</button>
      </div>);

    console.timeEnd("Render " + this.counter++)
    return v;
  }

  squareRoot = () => {
    this.setState({
      array: this.state.array.map(x => Math.sqrt(x))
    })
  };

  setA = (event) => {
    console.log("Value changed a:" + parseInt(event.target.value))
    this.a = parseInt(event.target.value);
    this.setState({
      array: this.checkStateIsValid(this.a, this.b) ? this.generateArray(this.a, this.b) : []
    })
  }

  setB = (event) => {
    console.log("Value changed b:" + event.target.value)
    this.b = parseInt(event.target.value);
    this.setState({
      array: this.checkStateIsValid(this.a, this.b) ? this.generateArray(this.a, this.b) : []
    })
  }

  checkStateIsValid = (a, b) => {
    if (a < b && a > 0)
      return true;
    return false;
  }

  //const generateRandomArray = (n, a, b) => (Array.from(Array(n), (x, index) => Math.ceil(Math.random() * (b - a) + a)))
  generateArray = (a, b) => {
    return Array.from(Array(b - a + 1), (x, index) => index + a)
  };
}

export default MyApp
import React from 'react'
import AppTitle from './AppTitle'
import Lab1App from './Lab1App'

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  }

  state = {
    a: 1,
    b: 10,
    isRangeValid: true
  }

  render() {
    console.time("Render " + this.counter)

    var v = (
      <div>
      <AppTitle />
      <Lab1App />
      <label>A: </label>
      <input type="number" value={this.state.a} onChange={(event) => this.setA(event)} />
      <label>  B: </label>
      <input type="number" value={this.state.b} onChange={(event) => this.setB(event)} />
      <br />
      <p>{this.state.isRangeValid ? generateArray( this.state.a, this.state.b).toString() : ""}</p>
    </div>);

    console.timeEnd("Render " + this.counter++)
    return v;
  }

  setA = (event) => {
    console.log("Value changed a:" + parseInt(event.target.value))

    this.setState({
      a: parseInt(event.target.value),
      isRangeValid: this.checkStateIsValid(event.target.value, this.state.b)
    })
  }

  setB = (event) => {
    console.log("Value changed b:" + event.target.value)

    this.setState({
      b: parseInt(event.target.value),
      isRangeValid: this.checkStateIsValid(this.state.a, parseInt(event.target.value))
    })
  }

  checkStateIsValid = (a, b) => {
    if (a < b && a > 0)
      return true;
    return false;
  }
}

//const generateRandomArray = (n, a, b) => (Array.from(Array(n), (x, index) => Math.ceil(Math.random() * (b - a) + a)))
const generateArray = (a,b) => (Array.from(Array(b-a +1), (x, index) => index +a));


export default MyApp
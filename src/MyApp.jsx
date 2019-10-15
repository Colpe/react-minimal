import React from 'react'
import AppTitle from './AppTitle'
import Lab1App from './Lab1App'

class MyApp extends React.Component {

  state = {
    a: 1,
    b: 10,
    isRangeValid: true
  }

  render() {
    return (
      <div>
        <AppTitle />
        <Lab1App />
        <label>A: </label>
        <input type="number" value={this.state.a} onChange={(event) => this.setA(event)} />
        <label>  B: </label>
        <input type="number" value={this.state.b} onChange={(event) => this.setB(event)} />
        <br />
        <p>{this.state.isRangeValid ? generateRandomArray(10, this.state.a, this.state.b).toString() : ""}</p>
      </div>
    )
  }

  setA = (event) => {
    console.log("Value changed a:" + event.target.value)

    this.setState({
      a: event.target.value,
      isRangeValid: this.checkStateIsValid(event.target.value, this.state.b)
    })
  }

  setB = (event) => {
    console.log("Value changed b:" + event.target.value)

    this.setState({
      b: event.target.value,
      isRangeValid: this.checkStateIsValid( this.state.a, event.target.value)
    })
  }

  checkStateIsValid = (a, b) => {
    if (a < b && a > 0)
      return true;
    return false;
  }
}

const generateRandomArray = (n, a, b) => (Array.from(Array(n), (x, index) => Math.ceil(Math.random() * (b - a) + a)))


export default MyApp
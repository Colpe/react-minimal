import React from 'react'
import AppTitle from './AppTitle'
import Lab1App from './Lab1App'

class MyApp extends React.Component {


  state = {
    a: 0,
    b: 0
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
        <br/>
      </div>
    )
  }

  setA = (event) => {
    console.log("Value changed a:"+ event.target.value)
    this.setState({
      a: event.target.value
    })
  }
  setB = (event) => {
    console.log("Value changed b:"+ event.target.value)

    this.setState({
      b: event.target.value
    })
  }
}

export default MyApp
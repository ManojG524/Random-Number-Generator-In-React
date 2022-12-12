// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={this.generateNumber} type="button">
          Generate
        </button>
        <p className="number">{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator

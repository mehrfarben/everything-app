import React from "react"
import todoideas from "../data/todoideas"

class IdeaGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomIdea: null,
    }
    this.generateRandomIdea = this.generateRandomIdea.bind(this)
  }

  generateRandomIdea() {
    const keys = Object.keys(todoideas)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    const randomIdea = todoideas[randomKey]
    this.setState({ randomIdea })
  }

  render() {
    const { randomIdea } = this.state

    return (
      <div className='idea-page'>
        <h1 className='idea-title'>Idea Generator</h1>
        <div className='idea-app'>
          {randomIdea && (
            <div className='idea-container'>
              <h2 className='idea'>{randomIdea.idea}</h2>
              <p className='idea-price'>Price: {randomIdea.price}</p>
            </div>
          )}
        </div>
        <button className='idea-btn' onClick={this.generateRandomIdea}>
          Give me an idea
        </button>
      </div>
    )
  }
}

export default IdeaGenerator

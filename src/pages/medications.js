import React, {Component} from 'react'
import {map} from 'ramda'

class Medications extends Component {
  constructor() {
    super()
    this.state = {
      medications: []
    }
  }


componentDidMount() {
  fetch(`http://localhost:8080/medications`)
    .then(resp => resp.json())
    .then(medications => this.setState({medications}))
}

  render() {
    const li = medication => {
      return (
        <li key={medication._id}>{medication.label}</li>
      )
    }

    return (
        <div>
        <fieldset>
        <h3>Medication list:</h3>
          <ul>
            {map(li, this.state.medications)}
          </ul>
          <button className='bg-light-green br2'
            onClick={this.props.nav('medicationForm')}>Add Medications</button>
          </fieldset>
      </div>
    )
  }
}

export default Medications

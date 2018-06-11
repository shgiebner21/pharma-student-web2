import React, {Component} from 'react'
import {map} from 'ramda'

class Pharmacies extends Component {
  constructor() {
    super()
    this.state = {
      pharmacies: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/pharmacies`)
      .then(resp => resp.json())
      .then(pharmacies => this.setState({pharmacies}))
  }

  render() {
    const li = pharmacy => {
      return (
        <li key={pharmacy._id}>{pharmacy.storeName} -- {pharmacy.streetAddress} </li>
      )
    }

    return (
        <div>
        <fieldset>
          <h3>Pharmacy list:</h3>
          <ul>
            {map(li, this.state.pharmacies)}
          </ul>
          <button className='br2 bg-light-blue' onClick={this.props.nav('pharmacyForm')}>Add Pharmacy</button>
        </fieldset>
      </div>
    )
  }
}

export default Pharmacies

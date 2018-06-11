import React, {Component} from 'react'
import {map} from 'ramda'

class Patients extends Component {
  constructor() {
    super()
    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/patients`)
      .then(resp => resp.json())
      .then(patients => this.setState({patients}))
  }

  render() {
    const li = patient => {
      return (
        <li key={patient._id}>{patient.firstName} {patient.lastName}</li>
      )
    }

    return (
      <div>
       <fieldset>
         <h3>Patient list:</h3>
         <ul>
           {map(li, this.state.patients)}
         </ul>
         <button className='br2 bg-light-red' onClick={this.props.nav('patientForm')}>Add Patient</button>
         </fieldset>
      </div>
    )
  }
}

export default Patients

import React, { Component } from 'react'
import 'tachyons/css/tachyons.css'
import Medications from './pages/medications'
import Patients from './pages/patients'
import Pharmacies from './pages/pharmacies'
import PharmacyForm from './pages/pharmacy-form'
import PatientForm from './pages/patient-form'
import MedicationForm from './pages/medication-form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'patients'
    }
    this.nav = this.nav.bind(this)
  }

  nav (page) {
    return (e) => {
      e ? e.preventDefault() : null
      this.setState({page: page})
    }
  }

  render() {
    return (
      <div className="pa2">
        <nav>
          <a href='#' onClick={this.nav('patients')}>Patients</a>
          |
          |
          <a href='#' onClick={this.nav('pharmacies')}>Pharmacies</a>
          |
          |
          <a href='#' onClick={this.nav('medications')}>Medications</a>
        </nav>
        <h1>{this.state.page.toUpperCase()}</h1>
        {this.state.page === 'patients' ? <Patients nav={this.nav}/> : null}
        {this.state.page === 'pharmacies' ? <Pharmacies nav={this.nav}/> : null}
        {this.state.page === 'medications' ? <Medications nav={this.nav}/> : null}
        {this.state.page === 'pharmacyForm' ? <PharmacyForm nav={this.nav} /> : null}
        {this.state.page === 'patientForm' ? <PatientForm nav={this.nav} /> : null}
        {this.state.page === 'medicationForm' ? <MedicationForm nav={this.nav} /> : null}
      </div>
    )
  }
}

export default App

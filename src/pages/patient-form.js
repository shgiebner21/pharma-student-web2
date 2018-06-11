import React, {Component} from 'react'

class PatientForm extends Component {
  constructor() {
    super()
    this.state = {
      patientNumber: '',
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      ethnicity: '',
      last4SSN: '',
      conditions: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('JSON patient data looks like; ', JSON.stringify(this.state))
    fetch('http://localhost:8080/patients', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.nav('patients')() )
  }

  render() {
    return (
      <div>
      <fieldset className='bg-light-red'>
        <h3>New Patient input form:</h3>
      </fieldset>
      <form onSubmit={this.handleSubmit}>
       <fieldset className='bg-light-red'>
        <fieldset className='bg-light-yellow'>
          <label>Patient Number</label>
          <input name='patientNumber' type='text' className='ma2'
             value={this.state.patientNumber} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>First Name</label>
          <input name='firstName' type='text' className='ma2'
             value={this.state.firstName} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>Last Name</label>
          <input name='lastName' type='text' className='ma2'
              value={this.state.lastName} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>Birth Date</label>
          <input name='birthdate' type='text' className='ma2'
              value={this.state.birthdate} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>Gender</label>
          <input name='gender' type='text' className='ma2'
             value={this.state.gender} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>Ethnicity</label>
          <input name='ethnicity' type='text' className='ma2'
             value={this.state.ethnicity} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>last 4 SSN</label>
          <input name='last4SSN' type='text' className='ma2'
             value={this.state.last4SSN} onChange={this.handleChange}/>
        </fieldset>
        <fieldset className='bg-light-yellow'>
          <label>Conditions</label>
          <input name='conditions' type='text' className='ma2'
             value={this.state.conditions} onChange={this.handleChange}/>
        </fieldset>
      </fieldset>
      <div className='ma2'>
      <button className='br2 bg-light-red'>Submit</button>
      </div>
      </form>
      </div>
    )
  }
}

export default PatientForm

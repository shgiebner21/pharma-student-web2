import React, {Component} from 'react'

class MedicationForm extends Component {
  constructor() {
    super()
    this.state = {
      label: '',
      amount: '',
      unit: '',
      form: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:8080/medications', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.nav('medications')() )
  }

  render() {
    return (
      <div>
       <fieldset className='bg-light-green'>
        <h3>Add new Medications:</h3>
      </fieldset>
        <form onSubmit={this.handleSubmit}>
          <fieldset className='bg-light-green'>
            <fieldset className='bg-light-yellow'>
              <label className='ma2'>Label</label>
              <input name='label' type='text' placeholder='aspirin 10 mg syrup'
                     value={this.state.label} onChange={this.handleChange}/>
            </fieldset>
            <fieldset className='bg-light-yellow'>
              <label className='ma2'>Amount</label>
              <input name='amount' type='text'
                     value={this.state.amount} onChange={this.handleChange}/>
            </fieldset>
            <fieldset className='bg-light-yellow'>
              <label className='ma2'>Unit</label>
              <input name='unit' type='text' placeholder='mg'
                     value={this.state.unit} onChange={this.handleChange}/>
            </fieldset>
            <fieldset className='bg-light-yellow'>
              <label className='ma2'>Form</label>
              <input name='form' type='text' placeholder='tablet, syrup, patch'
                     value={this.state.form} onChange={this.handleChange}/>
            </fieldset>
          </fieldset>
          <button className='ma2 br2 bg-light-green'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MedicationForm

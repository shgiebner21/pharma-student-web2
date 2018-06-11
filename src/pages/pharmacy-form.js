import React, {Component} from 'react'

class PharmacyForm extends Component {
  constructor() {
    super()
    this.state = {
      storeNumber: '',
      storeChainName: '',
      storeName: '',
      streetAddress: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(e) {
  this.setState({[e.target.name]: e.target.value})
}
handleSubmit(e) {
  e.preventDefault()
  fetch('http://localhost:8080/pharmacies', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(this.state)
  })
  .then(resp => resp.json())
  .then(data => this.props.nav('pharmacies')() )
}

  render() {
    return (
      <div>
      <fieldset className='bg-light-blue'>
        <h3>Add new Pharmacy:</h3>
      </fieldset>
        <form onSubmit={this.handleSubmit}>
        <fieldset className='bg-light-blue'>
         <fieldset className='bg-light-yellow'>
            <label className='ma2'>Store Number</label>
            <input name='storeNumber' type='text'
              value={this.state.storeNumber}  onChange={this.handleChange}
            />
         </fieldset>
         <fieldset className='bg-light-yellow'>
            <label className='ma2'>Store Chain Name</label>
            <input name='storeChainName' type='text'
               value={this.state.storeChainName}  onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className='bg-light-yellow'>
            <label className='ma2'>Store Name</label>
            <input name='storeName' type='text'
              value={this.state.storeName}  onChange={this.handleChange}
            />
            </fieldset>
            <fieldset className='bg-light-yellow'>
            <label className='ma2'>Street Address</label>
            <input name='streetAddress' type='text'
               value={this.state.streetAddress}  onChange={this.handleChange}
            />
            </fieldset>
            <fieldset className='bg-light-yellow'>
            <label className='ma2'>Phone Number</label>
            <input name='phone' type='text'
               value={this.state.phone}  onChange={this.handleChange}
            />
            </fieldset>
          </fieldset>
            <button className='br2 ma2 bg-light-blue'>Submit</button>
          </form>
      </div>
    )
  }
}

export default PharmacyForm

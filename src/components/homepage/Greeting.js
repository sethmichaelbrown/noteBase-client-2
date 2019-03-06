import React, { Component } from 'react'

// import {LinkContainer} from ''

import '../../styles/greeting.css'

class Greeting extends Component {

  state = {
    username: ''

  }

  componentDidMount = () => {
    const newState = { ...this.state }
    newState.username = localStorage.getItem('CognitoIdentityServiceProvider.2cu6kte7i054cuudogranfid4l.LastAuthUser')
    this.setState({ username: newState.username })
  }

  render() {
    return (
      <div className="Greeting">
        <div className="row add-margin-top">
          <div className="col-md-4">
            <p>Image Here</p>
          </div>
          <div className="col-md-7">
            <h4>Hello, {this.state.username}</h4>
            <h6>10 Bases in 3 Languages</h6>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <button type="button" class="btn btn-outline-dark btn-block">My Account</button>
          </div>
          <div className="col-md-6">
            <button type="button" class="btn btn-outline-dark btn-block">Sign Out</button>
          </div>
        </div>


      </div>

    )
  }
}


export default Greeting
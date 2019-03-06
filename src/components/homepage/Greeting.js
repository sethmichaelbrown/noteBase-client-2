import React, { Component } from 'react'


// import {LinkContainer} from ''

import '../../styles/greeting.css'

class Greeting extends Component {


  render() {
    return (
      <div className="Greeting">
        <div className="row add-margin-top">
          <div className="col-md-4">
            <p>Image Here</p>
          </div>
          <div className="col-md-7">
            <h4>Hello, {this.props.username}</h4>
            <h6>10 Bases in 3 Languages</h6>
          </div>
        </div>
        <div className="row mt-3 greeting-display-flex">
          <div className="col-md-6">
            <button type="button" className="btn btn-outline-dark">My Account</button>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-outline-dark" onClick={this.props.signOut}>Sign Out</button>
          </div>
        </div>


      </div>

    )
  }
}


export default Greeting
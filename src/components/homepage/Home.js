import React from 'react'
import '../../styles/home.css'
import { LinkContainer } from 'react-router-bootstrap'
import Auth from 'aws-amplify-react'
import Greeting from './Greeting'
import RecentBases from './RecentBases'


const Home = (props) => {
  
  const signOut = async () => {
    await Auth.signOut()
    this.props.rerender()
  }

  return (
    <div className="Home">
      <div className="homepage">
        <div className="row container">
          <div className="col-md-4 greeting-component">
            <Greeting
              signOut={signOut} />
          </div>
          <div className="col-md-7 offset-md-1">
            <RecentBases
              newBase={props.newBase}
              userBases={props.userBases} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
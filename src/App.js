import React, { Component } from 'react';
import './App.css';

import { Storage, API, graphqlOperation } from 'aws-amplify'
import { Auth, withAuthenticator } from 'aws-amplify-react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import randomWordArray from './components/RandomWord'
import NavBar from './components/NavBar'
import Home from './components/homepage/Home'
import MyAccount from './components/myaccount/MyAccount'

import getUser from './graphql/queries'


class App extends Component {

  state = {
    authd: true,
    newBaseName: '',
    newCodeNote: '',
    newTextNote: '',
    userBases: []
  }

  componentDidMount = async () => {
    const newState = { ...this.state }
    // const response = await API.graphql(graphqlOperation(listNotes))
    // newState.userBases = JSON.stringify(response.data.listNotes.items)
    // this.setState({ userBases: newState.userBases })
    console.log(this.state)

  }

  randomNameGenerator = () => {
    const rWA = randomWordArray
    let generatedBaseName = []
    for (let i = 0; i < 3; i++) {
      let randomValue = Math.floor(Math.random() * Math.floor(rWA.length - 1))
      generatedBaseName.push(rWA[randomValue])
    }
    const newState = { ...this.state }
    newState.newBaseName = generatedBaseName.join('-')
    this.setState({ newBaseName: newState.newBaseName })
  }


  newBase = async (event) => {
    this.randomNameGenerator()

  }

  // updateBase = async () => {
  //   const updatedNote = {
  //     name: this.state.newBaseName,
  //     codeNote: this.state.newCodeNote,
  //     textNote: this.state.newTextNote
  //   };
  //   const newEvent = await API.graphql(graphqlOperation(addNote, updatedNote))
  //   console.log(JSON.stringify(newEvent))
  // }


  uploadFile = (evt) => {
    const file = evt.target.files[0]
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {console.log(getUser())}

          <Switch>
            <Route exact path="/" render={() => <Home newBase={this.newBase} userBases={this.state.userBases} />} />
            <Route exact path="/my-account" render={() => <MyAccount/>} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App)
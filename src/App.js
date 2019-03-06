import React, { Component } from 'react';
import './App.css';

import { Storage, API, graphqlOperation } from 'aws-amplify'
import { Auth, withAuthenticator } from 'aws-amplify-react'

import randomWordArray from './components/RandomWord'
import NavBar from './components/NavBar'
import Greeting from './components/homepage/Greeting'
import RecentBases from './components/homepage/RecentBases'

const listNotes = `query listNotes {
  listNotes{
    items{
      id
      name
      codeNote
      textNote
    }
  }
}`

const addNote = `mutation createNote($name:String! $codeNote:String $textNote:String) {
  createNote(input:{
    name:$name
    codeNote:$codeNote
    textNote:$textNote
  }){
    id
    name
    codeNote
    textNote
  }
}`



class App extends Component {

  state = {
    newBaseName: '',
    newCodeNote: '',
    newTextNote: '',
    userBases: []
  }

  componentDidMount = async () => {
    const newState = { ...this.state }
    const response = await API.graphql(graphqlOperation(listNotes))
    newState.userBases = JSON.stringify(response.data.listNotes.items)
    this.setState({ userBases: newState.userBases })

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

  updateBase = async () => {
    const updatedNote = {
      name: this.state.newBaseName,
      codeNote: this.state.newCodeNote,
      textNote: this.state.newTextNote
    };
    const newEvent = await API.graphql(graphqlOperation(addNote, updatedNote))
    console.log(JSON.stringify(newEvent))
  }


  uploadFile = (evt) => {
    const file = evt.target.files[0]
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <div className="homepage">
          <div className="row container">
            <div className="col-md-4">
              <Greeting />
            </div>
            <div className="col-md-7 offset-md-1">
              <RecentBases
                userBases={this.state.userBases}/>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default withAuthenticator(App)



{/* Move to user settings page */ }
{/* <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>

        <S3Album level="private" path='' />
         {/* End Move to user settings page */}

{/* <input type="text" onKeyUp={this.updateState} /> */ }

{/* 
        <button onClick={this.newBase}>New Base</button>
        {this.state.newBaseName ? <div>{this.state.newBaseName}</div> : ''} */}
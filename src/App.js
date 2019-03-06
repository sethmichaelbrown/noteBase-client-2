import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, S3Album } from 'aws-amplify-react'

import randomWordArray from './RandomWord'

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

  state={
    inputVal: '',
    newBaseName: ''
  }

  randomNameGenerator = () => {

  }

  updateState = (event) => {
    let value = event.target.value.split(' ').join('-')
    this.setState({newBaseName: event.target.value})
  }

  newBase = async (event) => {

  

  }

  todoMutation = async () => {
    const updatedNote = {
      name: this.state.newBaseName,
      codeNote: "console.log('Hello World!')",
      textNote: "How to log 'Hello World!'"
    };
    const newEvent = await API.graphql(graphqlOperation(addNote, updatedNote))
    console.log(JSON.stringify(newEvent))
  }

  listQuery = async () => {
    console.log('listing todos')
    const allNotes = await API.graphql(graphqlOperation(listNotes))
    const response = JSON.stringify(allNotes.data.listNotes.items.map(item => console.log(item)))
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
        {/* Move to user settings page */}
        {console.log(randomWordArray[0])}
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>
        
        <S3Album level="private" path='' />

        <input type="text" onKeyUp={this.updateState}/>
        <button onClick={this.newBase} disabled={this.state.newBaseName ? '' : 'disabled'}>New Base</button>
        {/* End Move to user settings page */}
      </div>
    );
  }
}

export default withAuthenticator(App);

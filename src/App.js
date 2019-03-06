import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, S3Album } from 'aws-amplify-react'

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

  todoMutation = async () => {
    const todoDetails = {
      name: 'Party tonight!',
      codeNote: "console.log('Hello World!')",
      textNote: "How to log 'Hello World!'"
    };
    console.log('todoDetails', todoDetails)
    const newEvent = await API.graphql(graphqlOperation(addNote, todoDetails));
    console.log(JSON.stringify(newEvent));
  }

  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listNotes));
    console.log(JSON.stringify(allTodos));
  }

  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  render() {
    return (
      <div className="App">
        {/* Move to user settings page */}
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>
        <S3Album level="private" path='' />
        {/* End Move to user settings page */}
      </div>
    );
  }
}

export default withAuthenticator(App);

import React, { Component } from 'react';
import './App.css';
import Validation from './validationFilters/validationFilters';
import Char from './characters/characters';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);          // remove element of index number
    const updatedText = text.join('');    //join remaining elemnts
    this.setState({userInput: updatedText});
  }

  render () {
    const charList=this.state.userInput.split('').map((ch, index)=>{  //slipt string to array
      return <Char     // to display whole string characters one by one in block format
        char={ch} 
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          placeholder="Enter String"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        <p>String Length={this.state.userInput.length}</p>
        {charList}
      </div>
    );
  }
}

export default App;
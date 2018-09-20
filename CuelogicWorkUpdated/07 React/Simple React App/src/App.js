import React, { Component } from 'react';
import './App.css';
import Person1 from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {name: "Max", age:21 },
      {name: "ABC", age:19 },
      {name: "SER", age:15 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

/*  switchNameHandler= (newName1,newName2) =>{
  //  console.log("was clicked !");
  this.setState({
    persons: [
      {name: newName1, age:21 },
      {name: "Mathew", age:19 },
      {name: newName2, age:27 }
    ]
    } )
  }*/

  nameChangedHandler=(event) => {
    this.setState({
      persons: [
        {name: "John", age:21 },
        {name: event.target.value, age:19 },
        {name: "TAX", age:27 }
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler=() => {
      const doesShow=this.state.showPerson;
      this.setState({showPerson: !doesShow });
  }

  render() {

    let persons=null;

     if(this.state.showPerson){
        persons=(
            <div>
                {this.state.person.map((persons, index)=>{
                  return <Person1
                  click={() => this.deletePersonHandler(index)}
                  name={persons.name}
                  age={persons.age}/>
                })}
            </div> 
        );
     } 

    return (
      <div className="App">
        <h1>Hi, Its React App</h1>
        <p>This is really working </p>
        <button
          style={style}
          onClick={this.togglePersonHandler} >
        Toggle Button</button>
        <div>
          {persons}
        </div>
      </div>
    );

    //return React.createElement('div',null,React.createElement('button',null,'abc'));

    }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Person1 from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id: 'a', name: "Leeli", age:21 },
      {id: 'b', name: "John", age:19 },
      {id: 'c', name: "Emma", age:15 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
    });

    // immutably update state
    const person={
       ...this.state.persons[personIndex]
    }

    person.name=event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person; 
    //  const person=Object.assign({}, this.state.persons[personIndex]);   alternative
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow=this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //  const persons=this.state.persons;
    //  const persons=[...this.satte.persons];
    //  const persons=this.state.persons.split();
    const persons=[...this.state.persons];  // better method
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'black',
      font: 'inherit',
      border: '3px solid green',
      borderRadius: '10px',
      padding: '8px',
      curser: 'pointer'
    };

    let persons=null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((person, index)=> {
            return <Person1  
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div> 
      );
      
      style.backgroundColor= 'green';
      style.border= '3px solid red';   
  } 

    var assignedClasses=[];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.colortxt1);  //  classes=['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //  classes=['red', 'bold'] 
    }
    if(this.state.persons.length === 0 ){
      assignedClasses.push(classes.colortxt2); //  classes=['red', 'bold'] 
    }
      
    return (
        <div className={classes.App} >
          <h1 className={assignedClasses.join(' ')} >Hi, Its React App</h1>
          <p className={assignedClasses.join(' ')} >This is really working </p>
          <button
            style={style} 
            onClick={this.togglePersonHandler} >Toggle Button</button>
          {persons}
        </div>
    );

    //return React.createElement('div',null,React.createElement('button',null,'abc'));

    }
}

export default App;

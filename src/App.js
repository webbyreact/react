import React, { Component } from 'react';
//   import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person'

class App extends Component{

  state = {
    persons: [
      { name:'Alice', age :24 },
      { name:'Bob', age :25 },
      { name:'Charlie', age :26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => { 
    console.log("Was Clicked!!!");
    this.setState({
      persons: [
        { name: newName, age :24 },
        { name:'Bob', age :25 },
        { name:'Charlie', age :26 }
      ]
    }
    )
  }
  changeNameHandler = (event , index) => { 
    
    // console.log(person.name);
    const person = this.state.persons[index];
    person.name = event.target.value;
    const persons = this.state.persons;
    persons[index] = person;

    this.setState({
      persons : persons
      // persons: [
      //   { name:event.target.value, age :24 },
      //   { name:event.target.value, age :25 },
      //   { name:event.target.value, age :26 }
      // ]
    }
    )
  }
  changeAgeHandler = (event , index) => { 
    
    // console.log(person.name);
    const person = this.state.persons[index];
    person.age = event.target.value;
    const persons = this.state.persons;
    persons[index] = person;

    this.setState({
      persons : persons
    }
    )
  }
  toggelPersonsHandler = () => {
    const DoesShow = this.state.showPersons;
    this.setState({showPersons : !DoesShow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {
    const btnStyle={
      backgroundColor : 'White',
      font : 'inherit',
      border :'1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
              key={index} 
              delete={() =>{this.deletePersonHandler(index)}} 
              name={person.name} 
              changed={(event)=>{this.changeNameHandler(event, index)}} 
              changedage={(event)=>{this.changeAgeHandler(event, index)}} 
              age={person.age}></Person>
            
          })}
        </div> 
      );
    }

    return(
      <div className= 'App'>
        <h1>I'm react app.</h1>
        <button 
        onClick={this.toggelPersonsHandler} 
        style = {btnStyle}>
          Toggle Persons
        </button>
        {persons}
        {/* { this.state.showPersons ?
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.changeNameHandler}>
           Hobbies : Drinking
          </Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
          <input 
          onChange={this.changeNameHandler} 
          value={this.state.persons[1].name}>
          </input>
        </div> : null
      } */}
      </div>
    );
  }


  // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         </header>
//     </div>
//   );

  // return React.createElement(
  //   'div',
  //    {className: 'App'},
  //     React.createElement(
  //       'h1', {className: 'App-header'}, 'Does this work now ?'
  //       )
  // );}

}
export default App;

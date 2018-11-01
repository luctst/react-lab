import React, { Component } from 'react';
import Person from "./Person/Person";
import './App.css';

export default class App extends Component {
  state = { // Define the state of this component can only be used inside a class who inherit from Component class.
    person: [
      { name: "Lucas", age: 23 },
      { name: "Tommy", age: 20 },
      { name: "Antoine", age:23 }
    ],
    showPerson: false,
  }

  switchName = (newName) => { // We use arrow function for that this points to our class.
    this.setState( { // Method who change the state properties if there is a difference.
      person: [
        { name: newName, age: 40 },
        { name: "Thomas", age: 20 },
        { name: newName, age: 23 }
      ],
    } );
  }

  newName = (event) => {
    this.setState( {
      person: [
        { name: "Lucas", age: 40 },
        { name: event.target.value, age: 20 }, {/*event.target.value permet de récupérer la valeur de l'élement visé. Event = l'évevement, target = cible, value = valeur de l'évenement ciblé*/},
        { name: "Antoine", age: 23 }
      ],
    } );
  }

  displayPerson = () => {
    let d = this.state.showPerson;
    this.setState( {
      showPerson: !d,
    } );
}

  render() {

    return (

      <div className="App">
        <h1>Hello world</h1>

        <button onClick={this.switchName.bind(this, "Johny")} >Cliquez içi</button> {/* When your method use parameter you can use the bind method to define your parameter, or wrap your function inside an arrow function */}

        <button onClick={this.displayPerson} >Afficher les personnes</button>
        
        { // using the ternary operator to add condition can be useful 
          this.state.showPerson ?
            <div>
              <Person name={this.state.person[0].name} age={this.state.person[0].age} >And i'm study javascript and his environment in Bordeaux.</Person>
    
              <Person changed={this.newName} name={this.state.person[1].name} age={this.state.person[1].age} >And i'm currently in santiago, Chili</Person>
    
              <Person click={ () => this.switchName("Aimée") } name={this.state.person[2].name} age="23">And i'm working as full-stack developer in Parker&Parker.</Person>
              {/* We use the arrow function to use the method class with our props */}
            </div>
          : null
        }
      </div>
    );
  }
}
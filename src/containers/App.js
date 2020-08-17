import React, { Component } from "react";
import "./App.css";
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// function App() {
//   return (
//     <div className="App">
//      <h1>Hi , I am React App</h1>
//     </div>
//   );

// const App = props =>{

//  const [personsState,setPersonsState] =  useState({
//     persons: [
//       { name: 'Done',age:28 },
//       { name: ' Ral', age:23},
//     { name: 'Vig', age : 25}

//     ],
//     otherSTate : 'some other state value'
//   });
//  const [otherState,setOtherState]  = useState('dooom');

//   console.log(personsState, otherState);
//   const switchNameHandler = () =>{
//     // console.log('Was clicked!');
//       setPersonsState({
//         persons: [
//           { name: 'Donelys',age:28},
//      // Non to do  this.state.persons[0].name = "Donelys"
//            { name: ' Ral', age:23},
//           { name: 'RAG', age : 25}

//         ],
//         otherSTate: personsState.otherSTate
//       });
//     };

class App extends Component {
  state = {
    persons: [
      { id:"wefwerw",name: "Don", age: 28 },
      {id:"dfgdfg", name: " Ral", age: 23 },
      {id:"retg4gt", name: "RAG", age: 25 }
    ],
    otherSTate: "other state",
    showPersons: false
  };

  deletePersonHandler = (personIndex) =>{
// const persons = this.state.persons.slice();
const persons = [...this.state.persons];
persons.splice(personIndex,1);
this.setState({persons:persons})
  }
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p =>{
      return p.id === id;
    });
    const person ={...this.state.persons[personIndex]};

    person.name = event.target.value
    const persons =[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color:'white',
      fornt: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'

      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}/>
        ;
     
    }
   
    return (
      <div className="App">
        <Cockpit 
        title={this.props.appTitle}
        style={style} 
        showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    
    );
  }
}
export default App;

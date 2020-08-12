import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

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
              { name: 'Don',age:28},
         // Non to do  this.state.persons[0].name = "Donelys"
               { name: ' Ral', age:23},
              { name: 'RAG', age : 25}
            ],
            otherSTate: "other state"
          }

          switchNameHandler = (newName) =>{
                 console.log('Was clicked!');
                  this.setState({
                    persons: [
                      { name: 'Donelys',age:28},
                 // Non to do  this.state.persons[0].name = "Donelys"
                       { name: newName, age:23},
                      { name: 'RAG', age : 25}
                    ],
                    otherSTate: this.state.otherSTate
                  });
                }


         nameChangeHandler = (event) =>{

          this.setState({
          persons: [
            { name: 'donelys',age:26},
             { name: event.target.value, age:23},
            { name: 'RAG', age : 25}
          ]
         })
        }

    render(){
      const style ={
        backgroundcolor:'white',
        fornt: 'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      };
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("SDFSFSDF")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name}  
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangeHandler} >My Hobbies : Gamming</Person>
        <Person 
        name={this.state.persons[2].name}  
        age={this.state.persons[2].age} />
      </div>
    );
   }
  }
export default App;

    



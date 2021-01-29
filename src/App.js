import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/Contacts'
import State from './components/State'

const person1 = { name: "Jason Freeman", age: "35", school: "Hard Knocks", graduationYear: "2029"}
const person2 = { name: "Betty Cooker", age: "35", school: "Bakersfield", graduationYear: "2024"}
const person3 = { name: "Rosie River", age: "42", school: "Bakersfield", graduationYear: "2053"}

const group = [person1, person2, person3]

function displayGroup(){
  return group.map(person => <Contacts {...person}/>)
}

function App() { // this is a root component

  return (

    <div className="App">
      <Contacts {...person1}/>
      <p>------------------------------------</p>
      <State />
    </div>
  );
}

export default App;

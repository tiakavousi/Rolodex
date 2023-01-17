
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchFeild: ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({monsters: users},()=>console.log("STATE: ",this.state))});//setState get 2 parameters: first an object as the state and second a callback function (optional).
  };
  onSearchChange = (event)=>{
      const searchFeild = event.target.value.toLowerCase();
      this.setState(() => {
        return { searchFeild }
      });
  };
  
  render(){
    const {monsters, searchFeild} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter(
      (monster) => { return(monster.name.toLowerCase().includes(searchFeild))}
    );
   
    return (
      <div className = "App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monsters" 
          onChange={onSearchChange} 
        />

        {filteredMonsters.map((monster)=>{
          return(<h1 key={monster.id}>{monster.name}</h1>)
        })}

      </div>
    );
  }
}

export default App;

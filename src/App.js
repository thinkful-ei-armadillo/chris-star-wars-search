import React, {Component} from 'react';
import Search from './Search'
import Results from './Results'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      search:'',
      results: [], 
    }
  }

  updateSearch = (search) => {
  this.setState({search})
  }

  getResults = (e) =>{
    e.preventDefault();
    fetch(`https://swapi.co/api/people/?search=${this.state.search}`)
    .then(res => {
      if (!res.ok){
        throw new Error (res.statusText)
      }
      return res.json(); 
    })
    .then(data => {
      return data.results.map(result => result.name) 
    })
    .then(nameResults => 
      this.setState({
        results: nameResults, 
      })
    );
  } 

  render(){
    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <Search updateSearch={this.updateSearch} getResults={this.getResults}/>
        <ul>
          <Results names={this.state.results} />
        </ul>
      </main>
    );
  }
}

export default App;
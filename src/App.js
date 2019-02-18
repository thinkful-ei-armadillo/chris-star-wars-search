import React, {Component} from 'react';
import Search from './Search'
import Results from './Results'
import HandleError from './HandleError'
import Loading from './Loading.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      results: [],
      errorMessage: '',
      loading: false, 
    }
  }

  clearForm = () => {
    this.setState(
      {
        results: [],
        errorMessage:'',  
      }
    )
  }

  toggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  updateSearch = (search) => {
    this.setState({search})
  }

  getResults = (e) =>{
    e.preventDefault();
    this.toggleLoading();
    this.clearForm();   
    fetch(`https://swapi.co/api/people/?search=${this.state.search}`)
      .then(res => {
        if (!res.ok){
          throw new Error (res.statusText)
        }
        return res.json(); 
      })
      .then(data => { 
        if (data.count === 0){
          this.setState({
            errorMessage: "No Results, Try a different query."
          })
        }
        this.setState({
          results: data.results, 
        })
        this.toggleLoading()
      })
    
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      }); 
    }

  render(){
    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <Search updateSearch={this.updateSearch} getResults={this.getResults} searchValue={this.state.search}/>
        <Loading loading={this.state.loading}/>
        <Results results={this.state.results}/>
        <HandleError message={this.state.errormsg}/>
      </main>
    );
  }
}

export default App;

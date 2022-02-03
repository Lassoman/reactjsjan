import React, { Component } from 'react'; //optionnel
import Mycars from './components/Mycars'
import './App.css';

class App extends Component{

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {

    return (
      <div className="App">
        <Mycars title={this.state.titre} />  

        <button>Changer le nom en dur</button>      
      </div>
    );
  }
  
}

export default App; 

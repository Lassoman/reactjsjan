import React, { Component } from 'react'; //optionnel
import Mycars from './components/Mycars'
import './App.css';

class App extends Component{

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  changeTitle = (e) => {
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  render() {

    return (
      <div className="App">
          <Mycars title={this.state.titre} />  

          <button onClick={this.changeTitle}>Changer le nom en dur</button>      
      </div>
    );
  }
  
}

export default App; 

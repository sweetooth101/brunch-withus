import React from 'react';

import Nav from './components/nav.js'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      menupop: false,
      diningin: "",
      number: null,
      text: "" ,
      foodnow: null,
    }
  }

  menuPopup = e => {
    e.preventDefault();
    this.setState({ menupop: true })
  }

  render() {
    return (
      <div className="App">
        <Nav menupop={this.menuPopup} />
        {this.state.menupop ? (
          <Sidemenu />
        ) : null}
      </div >
    );
  }
}


eatingMethod = e =>{
  e.preventDefault();
  
}

function Sidemenu() {
  return <div className='sidemenu'>
    <div>
      <h1>Locations</h1>
    </div>
    <div>
      <button>Dine In</button>
      <button onClick={this.eatingMethod}>Pick Up</button>
    </div>
    <div className={this.state.diningin === 'dining-in' ? 'selection' : 'hideaway'}>
      <h1>Dine In</h1>
      <h1>{this.state.date}</h1>
      <h1></h1>
    </div>
  </div>
}


export default App;

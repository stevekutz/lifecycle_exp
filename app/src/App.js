// import logo from './logo.svg';

import React, {Component} from 'react';

import Users from './components/Users';
import axios from 'axios';



import './App.css';

class App extends React.Component {
    state = {
        userData: [],

    }


    // Mounts ONCE after first render, DOM is drawn >> analogue>> use Effect with 2nd arg [] analogue
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({userData: res.data})
            })
            .catch( err => {
                console.log('ERROR: ', err);
            })
        
    }



  
  render() {
  
    return (
        <div className="App">
            <h1>   LifeCycle Hooks    </h1>
            <Users 
                userData = {this.state.userData}

            />
        </div>
    );
  
  
  
  
  
  }
  
}

export default App;

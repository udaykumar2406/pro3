import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from'./Header';
import Carosal from './Carosal';
import Card from './Card';
import Footer from './Footer';

class App extends Component{
  render(){
  return (
    <div className="App">
     <div>
       <Header/>
       <Carosal/>
       <Card/>
       <Footer/>
     </div>
    </div>
  );
}
}
export default App;

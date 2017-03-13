import React, { Component } from 'react';
import SocialButton from './components/socialButton/SocialButton';
import TypeWriter from './components/typewriter/TypeWriter';
import Header from './components/header/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navigation"/>
        <div className="title-wrapper">
            <h1 className="no-margin">Aidan Gee</h1>
            <h1 className="msg">Full stack Developer</h1>
            <h2><TypeWriter content={["Javascript", "React", "AngularJS", "Node.js®", "PHP", "Amazon Web Services", "NoSQL", "Build Tools", "HTML", "CSS", "SASS"]} loop={7}/></h2>
            <div className="social-buttons">
                <SocialButton href="https://www.facebook.com/aidan.gee.75" faClass="facebook"/>
                <SocialButton href="https://twitter.com/Aidygee" faClass="twitter"/>
                <SocialButton href="https://www.linkedin.com/pub/aidan-gee/75/761/854" faClass="linkedin"/>
                <SocialButton href="https://github.com/aidan-gee" faClass="github"/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

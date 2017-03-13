import React from 'react';

import './TypeWriter.css';

let content;

const TypeWriter = React.createClass({

  getInitialState(){
    return {
      content: ""
    }
  },

  componentDidMount(){
    this.startAnimating(0);
  },

  startAnimating(i){
    let {content} = this.props;
    if (content[i] && i < content.length) {
      // text exists! start typewriter animation
      this.typeWriter(content[i], 0, () => {
        this.startAnimating(i + 1)
      });
    } else if (this.props.loop){
      setTimeout(() => {
        this.startAnimating(0);
      }, this.props.loop*1000);
    }
  },

  typeWriter(text, i, callback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      this.setState({
        content : text.substring(0, i+1)
      })

      // wait for a while and call this function again for next character
      setTimeout(() => {
        this.typeWriter(text, i + 1, callback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof callback == 'function') {
      // call callback after timeout
      setTimeout(callback, 700);
    }
  },

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps);
    console.log(prevState);
  },

  render(){
    return (
      <span className="typewriter">
        {this.state.content}
      </span>
    );
  }
});

export default TypeWriter;

import React, { Component } from 'react';
import FileUpload from './FileUpload';
import IntervalExample from './IntervalExample';

class TextUpload extends Component {
    state = {
        selectedText: null
    }; 
    onTextUpload = () => {
        alert(this.state.selectedText);        
    };
    onTextChange = event => {    
        // Update the state
        this.setState({ selectedText: event.target.value });    
    };
    render() {
        return (
            <div className="App">
                <form>
                  <input type="textarea" onChange={this.onTextChange} name="textValue"/>
                  
                  <IntervalExample text ={this.state.selectedText}>Submit</IntervalExample>
                </form>
            </div>
          );
    }
    
  }
export default TextUpload;
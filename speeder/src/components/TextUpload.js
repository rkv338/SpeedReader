import React, { Component } from 'react';

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
                  <button onClick={this.onTextUpload} type="submit">Upload</button>
                </form>
            </div>
          );
    }
    
  }
export default TextUpload;
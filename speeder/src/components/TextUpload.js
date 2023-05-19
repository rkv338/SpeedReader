import React, { Component } from 'react';
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from 'react-router-dom';
import FileUpload from './FileUpload';

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
            <Router>
            <div className="App">
                <form>
                  <input type="textarea" onChange={this.onTextChange} name="textValue"/>
                  
                  <Link to="/file">Submit</Link>
                </form>
            </div>
            <Routes>
                <Route path="/file" element={<FileUpload/>}/>
            </Routes>
            </Router>
          );
    }
    
  }
export default TextUpload;
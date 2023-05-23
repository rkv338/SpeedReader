import React, { Component } from 'react';
import AWS from 'aws-sdk';

class FileUpload extends Component {
    state = {
        selectedFile: null
    };    
    handleUpload = () => {
        alert("File uploaded")
    };
    onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
       
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
       
        // Details of the uploaded file
        console.log(this.state.selectedFile);
       
        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
        
    };
    onFileChange = event => {    
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });    
    };
    render() {
        return (
            <div>
                <form>
                  <input type="file" onChange={this.onFileChange} />
                  <button onClick={this.onFileUpload} type="submit">Upload</button>
                </form>
            </div>
          );
    }
    
  }
export default FileUpload;
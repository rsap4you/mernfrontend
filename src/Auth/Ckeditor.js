import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-component';
import Swal from 'sweetalert2';

const heightVar = window.innerHeight - 190;
const toolbarConfig = {
  height: heightVar,
  toolbar: 'Full',
  allowedContent: true,
  startupFocus: true,
  toolbarGroups: [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    { name: 'forms', groups: [ 'forms' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    { name: 'links', groups: [ 'links' ] },
    { name: 'insert', groups: [ 'insert' ] },
    { name: 'styles', groups: [ 'styles' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'tools', groups: [ 'tools' ] },
    { name: 'others', groups: [ 'others' ] },
    { name: 'about', groups: [ 'about' ] }
  ],
  // removeButtons: 'PasteFromWord,Image,Source,Save,NewPage,Preview,Templates,Cut,Copy,Paste,PasteText,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Link,Unlink,Anchor,Flash,Smiley,SpecialChar,PageBreak,Iframe,Styles,Maximize,ShowBlocks,About,Language',
  // removePlugins: 'elementspath',
};
class Example extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);

    this.state = {
      content: localStorage.getItem('customKey') || '',
    };
  }

  onChange(evt) {
    console.log('onChange fired with event info: ', evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent,
    });
  }

  setLocalStorage(content) {
    // Set content to localStorage with a specific key
    localStorage.setItem('customKey', content);
  }

  handleUpdateClick() {
    // Call setLocalStorage when the Update button is clicked
    this.setLocalStorage(this.state.content);
    Swal.fire('Success', 'User status updated successfully', 'success');
    // Add any additional logic you want to perform on the update click
  }

  render() {
    console.log('Current state:', this.state.content);
    return (
      <div>
        {this.state.content}
        <CKEditor
          activeClass="p10"
          config={{ ...toolbarConfig, height: window.innerHeight - 190 }}
          content={this.state.content}
          events={{
            change: this.onChange,
          }}
        />
        <center>
        <button  style={{backgroundColor:"green",color:"white",width:"10%",height:"5vh",marginTop:"1%"}} onClick={this.handleUpdateClick} >Update</button>
        </center>
      
      </div>
    );
  }
}

export default Example;

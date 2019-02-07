import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class FormItem extends Component {
    state = {
        id: '',
        key: '',
        name: '',
        content: ''
    }

    onLabelTextChange = e => {
        this.setState({ name: e.target.value })
    }

    onQuestionTextChange = e => {
        this.setState({ content: e.target.value })
    }

  render() {
    switch(this.props.formItem.key) {
        case 'Text':
            return (
                <div>
                   <TextField
                        name='Label'
                        value={this.state.name}
                        onChange={this.onLabelTextChange}
                        floatingLabelText='Question label'
                    />
                    <br />
                    <TextField
                        name='Question'
                        value={this.state.content}
                        onChange={this.onQuestionTextChange}
                        floatingLabelText='Example value'
                    />
                </div>
            );
        case 'CheckBox':
            return (
                <div>
                    <TextField
                        name='Label'
                        value={this.state.name}
                        onChange={this.onLabelTextChange}
                        floatingLabelText='Question label'
                    />
                    <br />
                    
                </div> 
            );
        default:
            return (
                <div>
                    <p>UpsziDupszi</p>
                </div>
            );
    }
  }
}

export default FormItem;
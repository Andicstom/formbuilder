import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './components/Menu';
import AddFormItem from './components/AddFormItem';
import Form from './components/Form';

class App extends Component {
  state = {
    formItems: [
      {
        id: '1',
        key: 'Text',
        name: 'Placeholder name...',
        content: 'Placeholder content...'
      },
      {
        id: '2',
        key: 'CheckBox',
        name: 'Placeholder name....',
        content: 'Placeholder content'
      }
    ]
  }

  addFormItem = () => {
    const newFormItem = {
      id: 3,
      key: 'Text',
      name: 'Placeholder name...',
      content: 'Placeholder text...'
    }
    this.setState({ formItems: [...this.state.formItems, newFormItem] })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Menu />
          <AddFormItem addFormItem={this.addFormItem} />
          <Form formItems={this.state.formItems} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

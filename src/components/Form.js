import React, { Component } from 'react';
import FormItem from './FormItem';


class Form extends Component {
  render() {
    return this.props.formItems.map((formItem) => (
        <FormItem key={formItem.id} formItem={formItem} /> 
    ));
  }
}

export default Form;
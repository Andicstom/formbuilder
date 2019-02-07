import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

class AddFormItem extends Component {
    
    onClick = () => {
        this.props.addFormItem();
    }

    render() {
        return (
            <FloatingActionButton style={style} onClick={this.onClick}>
                <AddIcon />
            </FloatingActionButton>
        );
    }
}

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

export default AddFormItem;
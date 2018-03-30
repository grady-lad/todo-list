import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Abstracting this to its own component
 * as <App/> doesn't really need to know
 * how the todo text is created. 
 * <App/> just wants the value of the newly
 * created todo.
 */
export class InputGroup extends Component {

  state = {
    inputText: '',
  }

  handleChange = event => this.setState({ inputText: event.target.value });

  handleClick = () => {
    const { inputText } = this.state;
    const { onSubmit } = this.props;
    this.setState({
      inputText: '',
    }, () => onSubmit(inputText));
  };
  
  render() {
    const { inputText } = this.state;
    const { placeholder, btnText, className } = this.props;
    return (
     <div className={className}>
       <input
        ref={r => (this.inputRef = r)}
         onChange={this.handleChange}
         placeholder={placeholder} 
         type="text" 
         value={inputText}/>
       <button onClick={this.handleClick}>{btnText}</button>
    </div>
    );
  }
}
InputGroup.defaultProps = {
 onSubmit: () => {},
 placeholder: '...',
 btnText: 'Add',
 className: 'todo-input',
};
InputGroup.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  btnText: PropTypes.string,
  className: PropTypes.string,
};

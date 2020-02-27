import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.text) {
            this.props.onSubmit({
                text: this.state.text,
                complete: false,
                id: shortid.generate()
            });

            this.setState({
                text: ''
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div className="form-wrapper">
                   <input
                       name="text"
                       value={this.state.text}
                       onChange={this.handleChange}
                       placeholder="Add Todo..."
                   />
                   <button onClick={this.handleSubmit}>Add</button>
               </div>
            </form>
        );
    }
};
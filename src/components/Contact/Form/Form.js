import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import classes from './Form.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#252525' },
  },
});

class Form extends Component {
  state = {
    textarea: '',
    name: '',
    email: '',
    title: '',
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Comment was sent: ${this.state.textarea}`);
  }

  render() {
    return (
      <div className={classes.Form}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className={classes.Row}>
            <input
              className={classes.Name}
              required
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
            <input
              className={classes.Email}
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <input
            type="text"
            name="title"
            placeholder="Your Title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <textarea
            name="textarea"
            value={this.state.textarea}
            placeholder="Your Comment"
            rows="8"
            onChange={e => this.handleChange(e)}
            required
          />
          <div className={classes.Button}>
            <MuiThemeProvider theme={theme}>
              <Button
                variant="raised"
                color="primary"
                size="large"
                type="submit"
              >
                Send message
              </Button>
            </MuiThemeProvider>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

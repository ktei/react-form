import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      city: 'Sydney',
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Sumitted:');
    console.log(this.state);
  }

  render() {
    return (
      <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" onChange={this.handleFieldChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleFieldChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select className="form-control" id="city" name="city" value={this.state.city} onChange={this.handleFieldChange.bind(this)}>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

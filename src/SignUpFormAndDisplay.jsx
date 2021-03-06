import React from 'react';

export default class SignUpFormAndDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      city: 'Sydney',
      signUpDetails: null,
    };
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, city } = this.state;

    this.setState({
      username: '',
      email: '',
      city: 'Sydney',
      signUpDetails: {
        username,
        email,
        city,
      },
    });
  }

  renderDisplay() {
    if (!this.state.signUpDetails) {
      return null;
    }

    return (
      <div className="panel panel-default" style={{ width: 300, padding: 15, margin: 20 }}>
        <h3>Your signup details</h3>
        <div>
          <label>Username</label>
          <div>{this.state.signUpDetails.username}</div>
        </div>
        <div>
          <label>Email</label>
          <div>{this.state.signUpDetails.email}</div>
        </div>
        <div>
          <label>City</label>
          <div>{this.state.signUpDetails.city}</div>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleFieldChange.bind(this)} />
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

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderDisplay()}
      </div>
    );
  }
}

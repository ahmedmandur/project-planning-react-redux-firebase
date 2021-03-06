import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div className="container">
        <Helmet>
          <title>New Project - Project Planner</title>
        </Helmet>
        <div className="col s12 m12">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create new project!</h5>
            <div className="col s12 m5">
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col s12 m12">
              <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  onChange={this.handleChange}
                  className="materialize-textarea"
                />
              </div>
            </div>
            <div className="col s12 m12">
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = (state, ownProps) => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);

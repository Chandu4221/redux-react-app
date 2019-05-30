import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions/postActions";

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  handleOnClick = () => {
    this.props.dispatch(getUserData);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Get Posts</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { posts: store.posts };
};

export default connect(mapStateToProps)(Home);

import React, { Component } from "react";

class LikeEvent extends Component {
  state = {
    isHover: false,
  };

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked && !this.state.isHover) classes += "-o";
    return (
      <span
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      ></span>
    );
  }
}

export default LikeEvent;

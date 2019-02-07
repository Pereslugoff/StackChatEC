import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = "/channels/1";
const GENERAL_CHANNEL = "/channels/2";
const DOGS_CHANNEL = "/channels/3";
const LUNCH_CHANNEL = "/channels/4";

class ChannelList extends Component {
  render() {
    const { messages } = this.props;
    console.log(this.props.channels)
    return (
      <ul>
        
        {this.props.channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span>{channel.name}</span>
                <span className="badge">
                  {messages.filter(message => message.channelId === channel.id).length}
                </span>
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

export default withRouter(connect(mapStateToProps)(ChannelList));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Message from './Message';
import MessageList from './MessageList';
import MessageSender from './MessageSender';

import './style.css';

export default class Chat extends Component {
  state = {
    currentUser: {},
    messages: [],
  };

  static propTypes = {
    onToggleParrot: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetchCurrentUser();
    this.fetchMessages();
  }

  // Fetches the current logged in user
  fetchCurrentUser = async () => {
    const { onError } = this.props;
    try {
      const response = await api.get('/me');
      this.setState({
        currentUser: response.data,
      });
    } catch (err) {
      onError({
        errorTitle: 'Current User',
        errorMessage: err.response.statusText || err.request.statusText,
      });
    }
  };

  // Adds a new message to messages array
  addNewMessage = (newMessage) => {
    const { messages } = this.state;
    messages.push(newMessage);
    this.setState({
      messages,
    });
  };

  // Fetches last 200 messages from server
  fetchMessages = async () => {
    const { onError } = this.props;
    try {
      const response = await api.get('/messages');
      this.setState({
        messages: response.data,
      });
      setTimeout(() => {
        this.fetchMessages();
      }, 3000);
    } catch (err) {
      onError({
        errorTitle: 'Fetch Messages',
        errorMessage: err.response.statusText || err.request.statusText,
      });
    }
  };

  // Renders each message from messages array inside MessageList
  renderMessages = () => {
    const { messages } = this.state;
    return messages.map(msg => <Message key={msg.id} data={msg} {...this.props} />);
  };

  render() {
    const { currentUser } = this.state;
    const { onError } = this.props;

    return (
      <main className="chat">
        <MessageList>{this.renderMessages()}</MessageList>
        <MessageSender user={currentUser} onMessageSend={this.addNewMessage} onError={onError} />
      </main>
    );
  }
}

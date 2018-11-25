import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import './style.css';

export default class MessageSender extends Component {
  messageInputRef = React.createRef();

  state = {
    message: '',
  };

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    onMessageSend: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
  };

  // Sets the message text in state
  handleInputMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // Sends a new message and adds it to MessageList through onMessageSend callback
  sendMessage = async (e) => {
    e.preventDefault();
    const {
      user: { id },
      onMessageSend,
      onError,
    } = this.props;
    const { message } = this.state;

    if (message) {
      try {
        const response = await api.post('/messages', { message, author_id: id });
        this.setState({ message: '' });
        onMessageSend(response.data);
      } catch (err) {
        onError({
          errorTitle: 'Send Message',
          errorMessage: err.response.statusText || err.request.statusText,
        });
      }
    }
    this.messageInputRef.current.focus();
  };

  render() {
    const { user } = this.props;
    const { message } = this.state;

    return (
      <section className="chat__message-sender">
        <img
          title={user.name}
          src={user.avatar}
          alt="My Avatar"
          className="message-sender__avatar"
        />
        <form className="message-sender__form" id="message-sender-form" onSubmit={this.sendMessage}>
          <input
            type="text"
            className="form__message"
            name="message"
            id="message"
            placeholder="Type a message..."
            value={message}
            onChange={this.handleInputMessage}
            ref={this.messageInputRef}
          />
          <button type="submit" className="form__send" />
        </form>
      </section>
    );
  }
}

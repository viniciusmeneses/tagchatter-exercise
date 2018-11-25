import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class MessageList extends Component {
  messageRef = createRef();

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // Scrolls to the bottom of MessageList when a new message is received
  scrollToBottom = () => {
    const { current } = this.messageRef;
    if (this.isNearToBottom(current)) {
      current.scrollTop = current.scrollHeight;
    }
  };

  // Checks if the MessageList scroll is near to bottom
  isNearToBottom = element => element.scrollTop + 80 * 10 >= element.scrollHeight
    || !element.scrollTop;

  render() {
    const { children } = this.props;
    return (
      <section className="chat__message-list" ref={this.messageRef}>
        {children}
      </section>
    );
  }
}

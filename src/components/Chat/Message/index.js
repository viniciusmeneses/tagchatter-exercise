import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import './style.css';

export default class Message extends Component {
  state = {
    hasParrot: false,
  };

  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      created_at: PropTypes.string,
      has_parrot: PropTypes.bool,
      author: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
    }).isRequired,
    onToggleParrot: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      hasParrot: data.has_parrot,
    });
  }

  // Toggles the message parrot marker
  toggleParrot = async () => {
    const { hasParrot } = this.state;
    const { data, onToggleParrot, onError } = this.props;

    try {
      const response = await api.put(`/messages/${data.id}/${hasParrot ? 'unparrot' : 'parrot'}`);
      const parrotResponse = response.data.has_parrot;
      this.setState({
        hasParrot: parrotResponse,
      });
      onToggleParrot(parrotResponse);
    } catch (err) {
      onError({
        errorTitle: 'Message Parrot',
        errorMessage: err.response.statusText || err.request.statusText,
      });
    }
  };

  render() {
    const { data } = this.props;
    const { hasParrot } = this.state;

    return (
      <article
        className={`message-list__message ${hasParrot ? 'message-list__message-has-parrot' : ''}`}
      >
        <div className="message__avatar">
          <img
            src={data.author.avatar}
            title={data.author.name}
            alt="Message Avatar"
            className="message__avatar-image"
          />
        </div>

        <div className="message__content">
          <header className="content__message-header">
            <h1 className="message-header__name">{data.author.name}</h1>
            <span className="message-header__created-time">
              {new Date(data.created_at).toTimeString().substring(0, 5)}
            </span>
            <button
              type="button"
              className={`message-header__parrot ${hasParrot ? 'message-header_has-parrot' : ''}`}
              onClick={this.toggleParrot}
            />
          </header>

          <article className="content__message-body">
            <p className="message-body__text">{data.content}</p>
          </article>
        </div>
      </article>
    );
  }
}

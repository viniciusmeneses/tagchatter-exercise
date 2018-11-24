import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import api from './services/api';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Chat from './components/Chat';

import 'react-notifications/lib/notifications.css';
import './App.css';

class App extends Component {
  state = {
    totalParrots: '-',
  };

  componentDidMount() {
    this.fetchParrotsCount();
  }

  // Fetches parrots count from server
  // It fetches again every 2 minutes to refresh parrots count
  fetchParrotsCount = async () => {
    try {
      const response = await api.get('/messages/parrots-count');
      this.setState({
        totalParrots: response.data,
      });
    } catch (err) {
      this.showNotification({
        errorTitle: 'Parrots Counter',
        errorMessage: err.response.statusText || err.request.statusText,
      });
    }
    setTimeout(() => {
      this.fetchParrotsCount();
    }, 120000);
  };

  // Increases or decreases the parrot count when the user parrot or unparrot a message
  setParrotsCount = (statusParrot) => {
    let { totalParrots } = this.state;
    // Due Airbnb style guide rules, the use of
    // unary operators isn't recommended
    // See: https://eslint.org/docs/rules/no-plusplus
    if (statusParrot) {
      totalParrots += 1;
    } else {
      totalParrots -= 1;
    }
    this.setState({
      totalParrots,
    });
  };

  // Shows an error notification
  showNotification = ({ errorTitle, errorMessage }) => {
    NotificationManager.error(errorMessage, errorTitle);
  };

  render() {
    const { totalParrots } = this.state;

    return (
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Header parrots={totalParrots} />
          <Chat onToggleParrot={this.setParrotsCount} onError={this.showNotification} />
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default App;

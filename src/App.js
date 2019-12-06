import React from 'react';
import Layout from './containers/Layout';
import { Provider } from 'react-redux';
import store from './store';
import GithubCorner from 'react-github-corners';
import ReactNotification from 'react-notifications-component';
import 'react-github-corners/dist/GithubCorner.css';
import 'react-notifications-component/dist/theme.css';


function App() {
  return (
    <Provider store={store}>
      <GithubCorner url="https://github.com/RedHotMan/quoted" backgroundColor="#255FFF" target="_blank" />
      <ReactNotification />
      <Layout />
    </Provider>
  );
}

export default App;

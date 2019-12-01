import React from 'react';
import Layout from './containers/Layout';
import { Provider } from 'react-redux';
import store from './store';
import GithubCorner from 'react-github-corners';
import 'react-github-corners/dist/GithubCorner.css';

function App() {
  return (
    <Provider store={store}>
      <GithubCorner url="https://github.com/RedHotMan/quoted" backgroundColor="#255FFF" target="_blank"/>
      <Layout />
    </Provider>
  );
}

export default App;

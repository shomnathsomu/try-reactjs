import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/MyApp';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<h1>Hello World, Man!! </h1>, document.getElementById('root'));

ReactDOM.render(
    <MyApp />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
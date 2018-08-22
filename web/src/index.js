import React from 'react';
import ReactDom from 'react-dom';
import TestPage from './test';

class App extends React.Component {
    render() {
        return (<div><TestPage /></div>);
    }
}
const app = document.getElementById('app');
ReactDom.render(<App />, app);

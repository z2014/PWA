import * as React from "react";
import ReactDOM from 'react-dom';

let isDone: boolean = false;
let decLiteral: number = 6;
const App = () => {
    return (
        <div>
            <p>Hello {decLiteral}</p>
        </div>
    )
};

ReactDOM.render( <App />, document.getElementById('app'));

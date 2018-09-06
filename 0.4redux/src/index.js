import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bootcss from 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(<div>
    <App />
    <button className="btn"></button>
</div>, document.getElementById('root'));
registerServiceWorker();

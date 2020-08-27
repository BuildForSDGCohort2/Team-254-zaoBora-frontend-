import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';
// import { ThroughProvider } from 'react-through'
import { HashRouter } from 'react-router-dom';

import './App.scss';
import AppRouter from './routers/AppRouter';
// import ErrorBoundary from './components/ErrorBoundary';
import configureStore from './store/configureStore';


const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter basename='/'>
                    <AppRouter />
                </HashRouter>
                {/*<ErrorBoundary>
                                    <AppRouter />
                                </ErrorBoundary>*/}
            </Provider>
        );
    }
}

export default App;

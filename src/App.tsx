import React from 'react'
import { ConnectedRouter } from 'connected-react-router';
import Routes from './navigations';
import environment from 'environment';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer'
import './App.scss';


function App(props) {
    return (
        <ConnectedRouter history={props.history} >
            <div id="apps" className="App">
                <div className="content" id="content">
                    <Header />
                    <Routes />
                    <Footer />
                </div>
                {/* <Loading /> */}
                {/* <ToastMessages /> */}
            </div>
        </ConnectedRouter>
    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import { Search, Venues } from './components'
import  store from  './stores';

import './index.css'


class App extends React.Component {

    render() {
        return (
              <Provider store={store.initialize()} >
                <div>
                    <Search />
                    <Venues />
                </div>
              </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

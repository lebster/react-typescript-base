import 'babel-polyfill'
import {createBrowserHistory} from 'history'
import * as React from 'react'
import { render } from 'react-dom'

// Router
import { Provider } from 'mobx-react'

import dashboardStore from './stores/dashboardStore'

// Components
import { App } from './app'

interface IDevtoolsWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

const history = createBrowserHistory()

const stores = {
    dashboardStore,
    history,
}

render(
    <Provider {...stores}>
            <App></App>
    </Provider>,
    document.getElementById('app'),
)

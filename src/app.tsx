import * as React from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
// Components
import { Dashboard } from 'views/dashboard/Dashboard'
import { Settings } from 'views/settings/Settings'

class App extends React.Component<{}> {
    public render() {
        return (
                <BrowserRouter>
                    {/* <Sidebar></Sidebar> */}
                    <main>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route path='/settings' component={Settings} />
                        </Switch>
                    </main>
                </BrowserRouter>
        )
    }
}

export {App}

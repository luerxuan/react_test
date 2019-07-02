import React,{Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import About from './views/abou'
import Home from './views/home'
import MyNavLink from './pages/myNavLink'

export default class App extends Component{

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-2">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2 offset-2">
                        <div className="list-group">
                            <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                            <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

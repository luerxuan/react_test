import React,{Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from '../pages/myNavLink'
import News from './news'
import Message from './message'

export default class Home extends Component{

    render() {
        return (
            <div>
                <h2>Home 组件的内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item home-nav-item">
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li className="nav-item home-nav-item">
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}

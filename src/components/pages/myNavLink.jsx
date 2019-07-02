import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component{

    render() {
        /*{...this.props}接收所有传过来的属性*/
        return <NavLink {...this.props} activeClassName="activeName"></NavLink>
    }
}

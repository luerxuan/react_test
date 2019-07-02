import React,{Component} from 'react'
import {Route, Link} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component{

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title:'message001'},
                {id: 2, title:'message002'},
                {id: 3, title:'message003'},
                {id: 4, title:'message004'}
            ]
            this.setState({messages})
        },1000)
    }

    ShowDetail = (id) => {
        this.props.history.push(`/home/message/${id}`)
    }
    ShowDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`)
    }
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }

    render() {
        const path = this.props.match.path;
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m,index) => (
                            <li key={index}>
                                <Link to={`${path}/${m.id}`}>{m.title}</Link>&nbsp;
                                <button onClick={() => this.ShowDetail(m.id)}>查看详情 (push)</button>&nbsp;
                                <button onClick={() => this.ShowDetail2(m.id)}>查看详情 (replace)</button>
                            </li>
                        ))
                    }
                </ul>
                <hr/>
                <p>
                    <button onClick={this.back}>返回</button>&nbsp;
                    <button onClick={this.forward}>前进</button>&nbsp;
                </p>
                <Route path={`${path}/:id`} component={MessageDetail} />
            </div>
        )
    }
}

import React,{Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component{

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount() {
        // 订阅消息
        PubSub.subscribe('search', (msg, searchName) => {
            this.setState({
                initView: false,
                loading: true
            })
            const url = `https://api.github.com/search/users?q=${searchName}`;
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    console.log(response)
                    const users = result.items.map(item => {
                        return {name: item.login,url: item.html_url, avatarUrl: item.avatar_url}
                    })
                    this.setState({
                        loading: false,
                        users
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        errorMsg: error.message
                    })
                })
        });
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state;
        if(initView) {
            return <h2>Please enter keyword search...</h2>
        }else if(loading){
            return <h2>Loading Result...</h2>
        }else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        }else {
            return (
                <div className="row">
                    {
                        users.map((user,index) => (
                            <div className="card col-sm-4 text-center" key={index}>
                                <a href={user.url}>
                                    <img src={user.avatarUrl} style={{width: 100}} alt={user.name}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

import React,{Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component{

    search = () => {
        // 得到输入的关键字
        const serchName = this.searchKey.value.trim();
        if(serchName){
            // 发布消息
            PubSub.publish('search', serchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" className="col-sm-4 mr-1 search_name" placeholder="enter the name you search" ref={input => this.searchKey = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

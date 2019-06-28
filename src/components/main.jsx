import React,{Component} from 'react'

export default class Main extends Component{

    render() {
        return (
            <div className="row">
                <div className="card col-sm-4 text-center">
                    <a href="https://github.com/reactjs">
                        <img src="https://avatars0.githubusercontent.com/u/6412038?s=200&v=4" style={{width: 100}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        )
    }
}

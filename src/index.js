import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
// import {HashRouter} from "react-router-dom"

import App from './components/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
    (
        // 引入react-router-dom之后要用 <BrowserRouter></BrowserRouter>  或者  <HashRouter></HashRouter>把<App />包起来才能渲染出定义的路由
        <BrowserRouter>
            <App />
        </BrowserRouter>
        // <HashRouter>
        // <App />
        // </HashRouter>
    ),
    document.getElementById('root')
)

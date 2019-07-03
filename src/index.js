import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import App from './components/app';
import {counter} from './redux/reducers'

const store = createStore(counter); // 内部会第一次调用redux函数得到初始state

function render(){
    ReactDOM.render(<App store = {store} />, document.getElementById('root'));
}
// 初始化渲染
render();

// 注册 ( 订阅 ) 监听 , 一旦状态发生改变 , 自动重新渲染
store.subscribe(render);


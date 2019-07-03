import {createStore} from 'redux'
import {counter} from './reducers'

const store = createStore(counter); // 内部会第一次调用redux函数得到初始state

export default store

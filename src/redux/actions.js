/*
* 包含所有 action creator
* 同步的action返回的是一个对象
* 异步的action返回的是一个函数
* */
import {INCREMENT, DECREMENT} from "./action-types";
// 增加 (incrementCreator 最好是increment)
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})
// 异步action
export const incrementAsync = (number) => {
    return dispatch => {
        // 异步的代码
        setTimeout(()=>{
            // 1s之后才去分发了一个增加的action 每个异步action最好都有一个同步到的action
            dispatch(increment(number));
        },1000)
    }
}

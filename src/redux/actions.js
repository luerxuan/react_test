/*
* 包含所有 action creator
* */
import {INCREMENT, DECREMENT} from "./action-types";
// 增加 (incrementCreator 最好是increment)
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})

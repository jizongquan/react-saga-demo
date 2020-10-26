import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'


export const getInputChangeAction = (value)=>{
    return{
        type:CHANGE_INPUT_VALUE,
        value
    }
}

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const initListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})

export const getInitList = ()=>{
    return{
        type:GET_INIT_LIST
    }
}

//当返回函数的时候可以接收一个dsipatch方法
// axios.get('/list.json').then((res)=>{
//     const data = res.data;
//     const action = initListAction(data)
//     dispatch(action)
// })
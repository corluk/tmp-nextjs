import React, { useReducer , useContext } from "react";

let isStarted = false 
let state = null 
let dispatch = null
const useReducerHook = ()=> {
    console.log("state") 
    console.log(state)
    if(state==null){
    console.log("reducer start")
    const [_state,_dispatch] = useReducer((state={},action = {})=>{

        switch(action.type){
            case "inc": 
                return {...state,...{counter:counter++}}
            default:
            return state
        }
    },{counter:1})
    state = _state
    dispatch = _dispatch
    } 
    console.log(dispatch)
    return  [state,dispatch]
}

export default useReducerHook
import {createStore} from "redux"
import { createWrapper,Context,Wrapper}  from "next-redux-wrapper" 
import { create } from "jss"

const reducer = (state= {tick:"init"},action={})=>{

    switch(action.type){
        case "TICK":
            return {...state,...action.payload}
        default :
            return state
        
    }
}

const makeStore = (context)=> createStore(reducer) 

export const wrapper = createWrapper(makeStore,{debug:true})
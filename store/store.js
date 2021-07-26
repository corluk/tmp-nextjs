import { diff } from "jsondiffpatch";

const { HYDRATE, createWrapper } = require("next-redux-wrapper");
const { createStore } = require("redux");


const reducer =(state={"tick":"init"},action )=>{

    switch(action.type){
        case HYDRATE:
            const stateDiff = diff(state,action.payload) 
            const wasBumbedOnClient = stateDiff.page[0].endsWith("X") // or any other criteria 
            return {
                ...state, 
                ...action.payload , 
                page : wasBumbedOnClient?state.page:action.payload.page
            }
            // this will override on client states . Real app should use proper reconciliation. 
            return {...state,...action.payload}
        case "TICK" : 
            return {...state,tick:action.payload}
        default:
            return state
        }
}

const makeStore = (context)=> createStore(reducer) 

export const wrapper  = createWrapper(makeStore,{debug:true})

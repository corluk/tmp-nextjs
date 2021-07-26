import React , {useContext,useReducer} from "react" 
import ReducerChild1, { ReducerContext } from "../components/ReducerChild1"
import useReducerHook from "../components/ReducerHook"

const Reducer =()=>{
  /*  const getInitialProps = ()=>{

        dispatch()
        console.log(state)
    }*/
    /* const [state,dispatch] = useReducer((state={},action={})=>{

        switch(action.type){
            default :
                return state 
        }
    },{counter:1})*/
  console.log(useReducerHook)
      const [state,dispatch]  = useReducerHook()
      const hook = useReducerHook()
     console.log(hook) 
   //const ReducerContext =  React.createContext({state:state,dispatch:dispatch}) 

   return (<>
          
                <ReducerChild1 /> 
         
   </>)
}

export default Reducer
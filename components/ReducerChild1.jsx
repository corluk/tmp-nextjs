import React , {useContext} from "react" 
import useReducerHook from "./ReducerHook"
 
const Component =()=>{

    const [state,dispatcher] = useReducerHook()
    console.log(state)
    console.log(dispatcher)
    return (<>
    <button onClick={()=>{dispatcher("inc")}}>+</button>
    <pre> {JSON.stringify(state)}</pre>
    </>)
}

export default Component 
import React from "react" 
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

const Component = ()=>{

    const state = useSelector(state=> state) 
    const dispatcher = useDispatch()
    return (<> 
    <div> <Link href="/second"><a>Second</a></Link></div>

    <div> 
        <button onClick={()=>dispatcher({type:"TICK",payload:"from component"})}>TICK</button>
        <pre>{JSON.stringify(state)}</pre>
    </div>
    
    </>)
}

export default Component
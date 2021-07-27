import React from "react" 
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

const Component = ()=>{

    const state = useSelector(state=> state) 
    const dispatcher = useDispatch()
    return (<> 
    <div> <Link href="/"><a>Home</a></Link></div>

    <div> 
        <button onClick={()=>dispatcher({type:"TICK",payload:"from component"})}>TICK</button>
        <pre>{JSON.stringify(state)}</pre>
    </div>
    
    </>)
}
Component.getInitialProps = async (ctx)=>{

    console.log("initial props triggered on second ")
    return {}
}
export default Component
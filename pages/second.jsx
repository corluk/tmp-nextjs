import React from "react"
import Link from "next/link"
import { Button } from "@material-ui/core"
import Error from 'next/error';
import posts from "../data/posts";
import { useRouter } from 'next/router'
const ComponentSecond = () => {
    const router = useRouter() 
    const {id} = router.query
    console.log(id)
    return (posts[id])? (<> <div>Second</div>
        <div>
            <Link  href="/"><Button>Index</Button></Link>
        </div>
        <div>
            <h1> {posts[id].title} </h1>
        </div>
    </>) : (<Error statusCode={404}>
        Additional 
    </Error>)
    // return posts[id] ? <Normal /> : <Error statusCode={404} />
   

}
export default ComponentSecond
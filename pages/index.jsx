import React from "react"
import Link from "next/link"
 
import posts from "../data/posts"
const Component = () => (
    <div>
        <div>
            {posts.map((post,index)=>(
                 <li key={index}>

                     <Link as={`/post/${index}`} href={{pathname:"/second",query:{id:index}}}>
                         <a> {post.title} </a>
                     </Link>
                 </li>
            ))}
            <Link href="/second" passHref>  Children are here </Link>
        </div>
        <div> Hello World

        </div>
        <div>
            
        </div>
    </div>)

export default Component
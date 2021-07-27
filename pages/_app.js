import React from "react" 
import { wrapper } from "../store/store"
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const WrappedApp =({Component,pageProps})=>{
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(WrappedApp)
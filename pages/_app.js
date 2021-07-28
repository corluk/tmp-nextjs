import React from "react" 
import { wrapper } from "../store/store"
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const WrappedApp =({Component,pageProps})=>{

    React.useEffect(()=>{
        const jssStyles = document.querySelector("#jss-server-side")
        if(jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    },[])
    return <React.Fragment> 
            <Head>
                <title> Material enabled</title>
                <meta name="viewport" content="minimum-scale=1,initial-scale=1,width=device-width"></meta>
            </Head>
            <ThemeProvider theme={{palette: {primary:{main:red.A400}}}}>
                <CssBaseline />
                <Component {...pageProps}/>
            </ThemeProvider>
        </React.Fragment>
}

export default wrapper.withRedux(WrappedApp)
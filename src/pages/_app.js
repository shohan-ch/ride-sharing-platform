import Layout from '@/components/Layout/Layout'
import LayoutOnlyHeader from '@/components/Layout/LayoutOnlyHeader'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps, router }) {

  const isAuthPage = router.pathname.startsWith('/[auth]')

  // Define a custom getLayout function that returns the main layout or  layout only header
  const getLayout = (page) => {
     return (
       <ThemeProvider attribute="class"> 
        { isAuthPage ? <LayoutOnlyHeader>{page}</LayoutOnlyHeader> : <Layout>{page}</Layout>}
        </ThemeProvider>
        )
  }

  return getLayout(<Component {...pageProps} />)

  // const getLayout  =  Component.getLayout || ((page)=> <Layout>{page}</Layout> )
  // return getLayout(<Component {...pageProps}/>)


}

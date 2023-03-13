import Layout from '@/components/Layout/Layout'
import LayoutOnlyHeader from '@/components/Layout/LayoutOnlyHeader'
import '@/styles/globals.css'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps, router }) {


  const isAuthPage = router.pathname.startsWith('/[auth]')

  // Define a custom getLayout function that returns the main layout or auth layout
  const getLayout = (page) => {
    return isAuthPage ? <LayoutOnlyHeader>{page}</LayoutOnlyHeader> : <Layout>{page}</Layout>
  }

  // Wrap the page component in the getLayout function
  return getLayout(<Component {...pageProps} />)

 
  // const getLayout  =  Component.getLayout || ((page)=> <Layout>{page}</Layout> )
  // return getLayout(<Component {...pageProps}/>)


}

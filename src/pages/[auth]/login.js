import Login from "@/components/Auth/Login"
import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader"

const LoginPage =  ()=> {
    return(
        <>
        <Login/>      
        </>
    )
}
LoginPage.getLayout = function getLayout (page)  {
    return <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
}
export default LoginPage;



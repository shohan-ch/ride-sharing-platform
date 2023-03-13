import LoginWithPassword from "@/components/Auth/LoginWithPassword"
import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader"

 const LoginWithPasswordPage = ()=>{

    return(
        <LoginWithPassword/>
    )

}
LoginWithPasswordPage.getLayout =  (page)=>{

    return <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
}
export default LoginWithPasswordPage;

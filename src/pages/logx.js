import Login from "@/components/Auth/Login"
import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader"

export default function Logx () {

    return(
        <>
        <Login/>      
        </>
    )
}
Logx.getLayout = (page) => {
    return  <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
}

// export default logx;

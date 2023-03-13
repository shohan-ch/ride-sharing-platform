import Otp from "@/components/Auth/Otp"

const otp  = ()=>{

    return(
        <Otp/>
    )


}

otp.getLayout = (page) => {
    return  <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
}

export default otp;


import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader"
import ReserveHome from "@/components/Reserve/ReserveHome"

const ResevePage = () => {


    return (
        <>
            <ReserveHome />
        </>
    )

}
ResevePage.getLayout  =  (page) =>{

    return <LayoutOnlyHeader>{page}</LayoutOnlyHeader>

}


export default ResevePage;
import { useRouter } from "next/router"

export default (props)=>{

   const router  = useRouter();

    console.log(router)

    return(
        <>
        
        <h1 className="bg-red-300">Hello home</h1>
        <p className="text-2xl">Hi name</p>

        </>

    )


}
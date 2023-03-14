import { useState } from "react"
import Header from "./Header/Header"
import Sidebar from "./SIdeBar/Sidebar"

export default ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen]  =   useState(true);
   
    const drawerHandle =  () =>{
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <Header  drawerHandle= {drawerHandle} />
            <Sidebar isDrawerOpen={isDrawerOpen}  />
            <main>
                {children}
            </main>
        </>
    )
}
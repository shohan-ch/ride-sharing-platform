import Header from "./Header/Header"
import Sidebar from "./SIdeBar/Sidebar"

export default ({ children }) => {

    return (
        <>
            <Header />
            <Sidebar />
            <main>
                {children}
            </main>
        </>
    )
}
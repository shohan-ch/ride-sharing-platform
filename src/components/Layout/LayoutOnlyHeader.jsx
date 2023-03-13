export default ({ children }) => {

    return (
        <>
            <nav className="bg-primary-500 lg:block hidden px-20 py-4 pl-20">
                <div className="text-26 flex items-center flex-shrink-0 text-white">
                    Get<span className="font-semibold tracking-tight">Ryd</span>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )

}
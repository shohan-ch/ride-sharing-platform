export default ({ drawerHandle }) => {


    return (
        <nav className="bg-primary-500 lg:block sticky top-0 z-50 hidden w-full px-20 py-4 pl-20">
            <div className="text-26 flex items-center flex-shrink-0 text-white">
                {/* Drawer Button */}
                <div className="mr-3 -mb-2 text-left">
                    <button
                        id="drawer_btn"
                        type="button"
                        onClick={drawerHandle}
                        className="transition-all duration-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                </div>
                Get<span className="font-semibold tracking-tight">Ryd</span>
            </div>
        </nav>


    )


}
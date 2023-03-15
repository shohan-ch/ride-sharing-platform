import { useRouter } from "next/router"
import Button from "../Utils/Button/Button"

export default () => {

    const router = useRouter();

    const clickHandeler = () => {

        router.push('/login')

    }

    return (

        <>

            <section className="dark:bg-dark-bg 2xs:w-full 2xs:block 2xs:h-full flex items-center justify-center h-screen bg-white">
                <div className="rounded-2xl lg:dark:border 2xs:pb-10 2xs:dark:border-0 sm:pb-3 sm:dark:border-0 p-5 border">
                    <div className="overflow-y-auto overflow-x-hidden  h-full xl:h-[600px] 2xl:h-[490px]  3xl:h-full w-[428px] dark:bg-dark-bg 2xs:w-auto">
                        <div className="lg:h-[316px] 2xl:h-[316px]">
                            <img
                                className="dark:hidden dark:opacity-0 w-full h-full"
                                src="/assets/reservation/VehicleLight.png"
                                alt="img"
                            />
                            <img
                                className="dark:block dark:opacity-100 hidden w-full h-full opacity-0"
                                src="/assets/reservation/vehicleDark.png"
                                alt="img"
                            />
                        </div>
                        <div className="relative lg:pt-0 2xs:text-left 2xs:px-5 2xs:pt-0 sm:text-left sm:px-5 sm:pt-[120px]">
                            <h1 className="text-32 2xs:text-26 2xs:mb-8 2xs:mt-0 dark:text-gray-2 mt-3 mb-5 font-extrabold text-black">
                                GetRyd Reserve
                            </h1>
                            <div className="flex gap-x-4 mb-6 2xs:mb-6 border-b border-[#F6F6F6] dark:border-[#2C2C35] pb-2">
                                <div>
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={20} cy={20} r={20} fill="#F8F8FC" />
                                        <g clipPath="url(#clip0_829_12806)">
                                            <path
                                                d="M25.0001 13.332H15.0001C13.1591 13.332 11.6667 14.8244 11.6667 16.6654V24.9987C11.6667 26.8396 13.1591 28.332 15.0001 28.332H25.0001C26.841 28.332 28.3334 26.8396 28.3334 24.9987V16.6654C28.3334 14.8244 26.841 13.332 25.0001 13.332Z"
                                                stroke="#29225E"
                                                strokeWidth="1.875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M23.3334 11.666V14.9993M16.6667 11.666V14.9993V11.666Z"
                                                stroke="#1A1A1A"
                                                strokeWidth="1.875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.6667 18.332H28.3334"
                                                stroke="#1A1A1A"
                                                strokeWidth="1.875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_829_12806">
                                                <rect
                                                    width={20}
                                                    height={20}
                                                    fill="white"
                                                    transform="translate(10 10)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="2xs:text-sm dark:text-white self-center font-medium">
                                    Choose your exact pick-up time up to 30 days in advance
                                </p>
                            </div>
                            <div className="flex gap-x-4 mb-6 2xs:mb-6 border-b border-[#F6F6F6] dark:border-[#2C2C35] pb-2">
                                <div>
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={20} cy={20} r={20} fill="#F4FAF6" />
                                        <path
                                            d="M17.4998 11.667H22.4998H17.4998ZM19.9998 18.3337V21.667V18.3337ZM19.9998 28.3337C21.7679 28.3337 23.4636 27.6313 24.7138 26.381C25.9641 25.1308 26.6665 23.4351 26.6665 21.667C26.6665 19.8989 25.9641 18.2032 24.7138 16.9529C23.4636 15.7027 21.7679 15.0003 19.9998 15.0003C18.2317 15.0003 16.536 15.7027 15.2858 16.9529C14.0355 18.2032 13.3331 19.8989 13.3331 21.667C13.3331 23.4351 14.0355 25.1308 15.2858 26.381C16.536 27.6313 18.2317 28.3337 19.9998 28.3337V28.3337Z"
                                            stroke="#4DAA6C"
                                            strokeWidth="1.875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="2xs:text-sm dark:text-white self-center font-medium">
                                    Extra wait time included to meet your trip
                                </p>
                            </div>
                            <div className="gap-x-4 lg:mb-12 2xs:mb-12 flex">
                                <div>
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={20} cy={20} r={20} fill="#FCF3F7" />
                                        <path
                                            d="M23.375 17.1875C23.375 17.0383 23.4343 16.8952 23.5398 16.7898C23.6452 16.6843 23.7883 16.625 23.9375 16.625H26.1875C26.3367 16.625 26.4798 16.6843 26.5852 16.7898C26.6907 16.8952 26.75 17.0383 26.75 17.1875V18.3125C26.75 18.4617 26.6907 18.6048 26.5852 18.7102C26.4798 18.8157 26.3367 18.875 26.1875 18.875H23.9375C23.7883 18.875 23.6452 18.8157 23.5398 18.7102C23.4343 18.6048 23.375 18.4617 23.375 18.3125V17.1875Z"
                                            fill="#BB3069"
                                        />
                                        <path
                                            d="M13.25 13.25C12.6533 13.25 12.081 13.4871 11.659 13.909C11.2371 14.331 11 14.9033 11 15.5V24.5C11 25.0967 11.2371 25.669 11.659 26.091C12.081 26.5129 12.6533 26.75 13.25 26.75H26.75C27.3467 26.75 27.919 26.5129 28.341 26.091C28.7629 25.669 29 25.0967 29 24.5V15.5C29 14.9033 28.7629 14.331 28.341 13.909C27.919 13.4871 27.3467 13.25 26.75 13.25H13.25ZM27.875 15.5V21.125H12.125V15.5C12.125 15.2016 12.2435 14.9155 12.4545 14.7045C12.6655 14.4935 12.9516 14.375 13.25 14.375H26.75C27.0484 14.375 27.3345 14.4935 27.5455 14.7045C27.7565 14.9155 27.875 15.2016 27.875 15.5ZM26.75 25.625H13.25C12.9516 25.625 12.6655 25.5065 12.4545 25.2955C12.2435 25.0845 12.125 24.7984 12.125 24.5V23.375H27.875V24.5C27.875 24.7984 27.7565 25.0845 27.5455 25.2955C27.3345 25.5065 27.0484 25.625 26.75 25.625Z"
                                            fill="#BB3069"
                                        />
                                    </svg>

                                </div>
                                <p className="2xs:text-sm dark:text-white self-center font-medium">
                                    Cancel at no charge up to 60 minutes in advance
                                </p>
                            </div>
                            <div className="2xs:sticky bottom-0 left-0 right-0">
                                <Button color="blue" handler={clickHandeler}>Reserve a ride</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>


    )

}
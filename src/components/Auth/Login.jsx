import { Router, useRouter } from "next/router"
import { useState } from "react";
import Button from "../Utils/Button/Button"
export default () => {

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const nextleHandler = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/otp')
    }, 2000)

  }





  return (
    <>


      <main className="mx-auto my-10 2xs:my-0 z-10 sm:w-[528px] 2xs:w-full dark:bg-dark-bg">
        <div className="wrapper 2xs:pl-5 2xs:pr-5 2xs:pt-5 2xs:border-0 2xl:shadow-none md:shadow-2xl lg:shadow-2xl relative p-10 border-2 border-gray-100">
          <div className="">
            <div>
              <h1 className="text-26 2xs:text-22 dark:text-gray-2 mb-1 font-bold text-gray-800">
                What is your mobile numbers
                <span className="2xs:hidden"> or email</span>?
              </h1>
              <p className="2xs:text-sm 2xs:mb-6 dark:text-gray-2 mb-8 text-lg font-normal text-gray-600">
                We’ll text an OTP code to verify your number.
              </p>
            </div>
            <div>
              <div className="2xs:space-x-10 flex space-x-6">
                <div className="dropdown relative w-1/6">
                  <button

                    className="dropdown-toggle flex-shrink-0 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    <svg
                      data-baseweb="icon"
                      title="open"
                      className="w-6 h-6 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>open</title>
                      <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"></path>
                    </svg>
                  </button>
                  <ul className="absolute dropdown-menu hidden border border-gray-200 z-[9999] w-[21rem] md:w-[28rem] bg-white dark:bg-dark-shape rounded-lg shadow-one dark:shadow-dark max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white dark:scrollbar-thumb-dark-stroke dark:scrollbar-track-white">
                    <li className="dropdown-item hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">
                          United States
                        </span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Germany</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+321</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">India</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+097</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">
                          Bangladesh
                        </span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+880</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Italy</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1623</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Italy</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1623</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Italy</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1623</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Italy</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1623</div>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between p-3 border-b border-gray-200 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                            </g>
                          </svg>
                        </div>
                        <span className="dark:text-gray-2 text-right">Italy</span>
                      </div>
                      <div className="dark:text-gray-2 text-gray-600">+1623</div>
                    </li>
                  </ul>
                </div>
                <div className="w-5/6">
                  <input
                    id="number"
                    type="text"
                    name="number"
                    placeholder="+09373732"
                    className="bg-gray-50 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black block w-full p-4 mb-5 text-sm text-gray-900 border border-gray-300"
                  />
                </div>
              </div>

              <Button iconName="rightArrow" iconPosition="right" color="blue" handler={nextleHandler} isLoading={isLoading} disabled={isLoading}>Next</Button>

              <p className="2xs:text-sm dark:text-gray-2 mb-0 text-lg font-normal text-gray-600">
                By continuing you may receive an SMS for verfication. Message and
                data rates may apply.
              </p>
            </div>


            <div className="grid">
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="dark:text-gray-2 mx-4 mb-0 text-sm text-center">or</p>
              </div>


              <Button iconName="google" iconPosition="left" color="gray">Continue with Google</Button>
              <Button iconName="apple" iconPosition="left" color="gray">Continue with Apple</Button>
              <Button iconName="facebook" iconPosition="left" color="gray">Continue with Facebook</Button>
              <Button iconName="mail" iconPosition="left" color="gray">Continue with Email</Button>


            </div>
          </div>
        </div>
      </main>
    </>
  )


}
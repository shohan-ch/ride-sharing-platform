import Image from "next/image"
import Button from "../Utils/Button/Button"

export default () => {

  return (

    <>
      <section className="lg:flex lg:justify-center lg:items-center 2xs:w-full 2xs:block 2xs:h-full sm:w-full sm:block dark:bg-dark-bg h-screen">
        <div className="lg:w-[528px] lg:h-auto lg:rounded-3xl lg:dark:border bg-white lg:px-10 2xs:px-5 2xs:pb-20 2xs:dark:border-0 sm:pb-20 sm:dark:border-0 dark:bg-dark-bg">
          <div className="lg:text-left lg:mt-10 lg:pt-0 2xs:text-left 2xs:pt-[50px] sm:text-left sm:px-10 sm:pt-[120px]">
            <h1 className="text-black font-bold text-26 2xs:text-[18px] mb-2 dark:text-gray-2">
              Welcome Back, Md. Sadat Hussain Khan.
            </h1>
            <div>
              <form action="#">
                <div className="input_box lg:mb-10 2xs:mb-4 sm:mb-8 relative w-full h-auto">
                  <input
                    autofocus=""
                    type="text"
                    id="simple-search"
                    className=" bg-gray-1 rounded-md w-full 
                    h-[58px] p-2 placeholder:font-semibold 
                    focus:shadow-md focus:outline focus:outline-4 
                      focus:outline-offset-2 focus:outline-gray-1 focus:ring-2 focus:ring-primary-500
                       dark:focus:outline-1
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:ring-2 
                       dark:ring-white dark:focus:border-black dark:placeholder:text-white/60"
                    placeholder="Enter Your Password"
                    required=""
                  />
                  <div className="right-2 lg:right-2 md:right-8 2xs:right-6 absolute inset-y-0 flex items-center pl-1 pointer-events-none">
                    <svg
                      height={25}
                      className="bi bi-x-circle-fill dark:fill-white dark:stroke-red-500"
                      width={25}
                      id="Layer_1"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      version="1.1"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z" />
                        <g>
                          <path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z" />
                        </g>
                      </g>
                    </svg>

                  </div>
                </div>


                <Button iconName="rightArrow" iconPosition="right" color="blue">Next</Button>
              </form>
            </div>
            <div className="2xs:pt-3 pb-2 space-x-2">
              <span className="text-black rounded-full inline-flex items-center justify-center font-medium text-[14px] px-5 h-9 mb-3 whitespace-nowrap bg-gray-2">
                <a href=".html">I forget my password</a>
              </span>
              <span className=" text-black rounded-full inline-flex items-center justify-center font-medium text-[14px] px-5 h-9 mb-3 whitespace-nowrap bg-gray-2">
                <a href=".html"> I can't sign in</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>

  )

}
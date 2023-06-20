import Image from "next/image";
import Button from "../Utils/Button/Button";

const LoginWithPassword = () => {
  return (
    <>
      <section className="h-screen dark:bg-dark-bg sm:block sm:w-full lg:flex lg:items-center lg:justify-center 2xs:block 2xs:h-full 2xs:w-full">
        <div className="bg-white dark:bg-dark-bg sm:pb-20 sm:dark:border-0 lg:h-auto lg:w-[528px] lg:rounded-3xl lg:px-10 lg:dark:border 2xs:px-5 2xs:pb-20 2xs:dark:border-0">
          <div className="sm:px-10 sm:pt-[120px] sm:text-left lg:mt-10 lg:pt-0 lg:text-left 2xs:pt-[50px] 2xs:text-left">
            <h1 className="mb-2 text-26 font-bold text-black dark:text-gray-2 2xs:text-[18px]">
              Welcome Back, Md. Sadat Hussain Khan.
            </h1>
            <div>
              <form action="#">
                <div className="input_box relative h-auto w-full sm:mb-8 lg:mb-10 2xs:mb-4">
                  <input
                    autofocus=""
                    type="text"
                    id="simple-search"
                    className=" h-[58px] w-full rounded-md 
                    bg-gray-1 p-2 placeholder:font-semibold 
                    focus:shadow-md focus:outline focus:outline-4 
                      focus:outline-offset-2 focus:outline-gray-1 focus:ring-2 focus:ring-primary-500
                       dark:border-gray-600
                       dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:ring-2
                       dark:ring-white 
                       dark:placeholder:text-white/60 dark:focus:border-black dark:focus:outline-1"
                    placeholder="Enter Your Password"
                    required=""
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-1 md:right-8 lg:right-2 2xs:right-6">
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

                <Button iconName="rightArrow" iconPosition="right" color="blue">
                  Next
                </Button>
              </form>
            </div>
            <div className="space-x-2 pb-2 2xs:pt-3">
              <span className="mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-2 px-5 text-[14px] font-medium text-black">
                <a href=".html">I forget my password</a>
              </span>
              <span className=" mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-2 px-5 text-[14px] font-medium text-black">
                <a href=".html"> I can't sign in</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginWithPassword;

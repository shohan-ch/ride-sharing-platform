import InputField from "../Forms/InputField"

export default () => {

  return (

    <>
      <nav className="bg-primary-500 lg:block hidden px-20 py-4 pl-20">
        <div className="text-26 flex items-center flex-shrink-0 text-white">
          Get<span className="font-semibold tracking-tight">Ryd</span>
        </div>
      </nav>
      <section className="lg:flex lg:justify-center lg:items-center 2xs:w-full 2xs:block 2xs:h-full sm:w-full sm:block h-screen">
        <div className="lg:w-[528px] lg:h-full  lg:rounded-3xl lg:dark:border bg-white lg:px-10 2xs:px-5 2xs:pb-20 2xs:dark:border-0 sm:pb-20 sm:dark:border-0 dark:bg-dark-bg">
          <div className="lg:text-left lg:pb-5 lg:mt-10 lg:pt-0 2xs:text-left 2xs:pt-[50px] sm:text-left sm:px-10 sm:pt-[120px]">
            <h1 className="text-black font-bold text-26 2xs:text-[18px] mb-2 dark:text-gray-2">
              Provide your user information
            </h1>
            <p className="2xs:text-sm 2xs:mb-8 sm:mb-5 dark:text-gray-2 mb-8 text-lg font-normal text-gray-600">
              Driver will confirm it’s you upon arrival. We will also send receipts
              to your email address.
            </p>
            <div>
              <div className="2xs:mb-4 sm:mb-8">
                {/* <label
              htmlFor="firstName"
              className="2xs:hidden text-gray-light mb-2 text-sm font-normal"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="name"
              className="bg-gray-1 rounded-md w-full h-[48px] p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:focus:outline-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder="Enter First Name"
            /> */}

                <InputField
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="2xs:mb-4 sm:mb-8">
                <InputField
                  label="Last Name"
                  type="text"
                  placeholder="Enter Last Name"
                />
                {/* <label
              htmlFor="firstName"
              className="2xs:hidden text-gray-light mb-2 text-sm font-normal"
            >
              Last Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-1 rounded-md w-full h-[48px] p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:focus:outline-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder="Enter Last Name"
            /> */}
              </div>
              <div className="2xs:mb-4 sm:mb-8">

                <InputField
                  label="Email"
                  type="email"
                  placeholder="Enter Email Address"
                />

                {/* <label
              htmlFor="firstName"
              className="2xs:hidden text-gray-light mb-2 text-sm font-normal"
            >
              Email
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-1 rounded-md w-full h-[48px] p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:focus:outline-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder="Enter Email Address"
            /> */}
              </div>
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="border border-red-400"
                  id="checkbox"
                />
              </div>
              <div className="flex items-center mb-6">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  onclick="failed()"
                  htmlFor="default-checkbox"
                  className="text-gray-light xs:text-xs mt-8 ml-5 font-normal"
                >
                  I hereby declare that all the above information are correct and
                  assure that I will abide by all the rules.
                </label>
              </div>
              <button
                onclick="success()"
                className="group 2xs:mt-10 rounded-5 bg-primary-500 dark:bg-primary dark:hover:bg-primary-500 focus:ring-blue-500 focus:border-blue-500 shadow-one dark:shadow-dark hover:text-white disabled:opacity-70 disabled:cursor-default hover:bg-primary-hover flex items-center justify-center w-full px-6 py-4 mb-5 text-base font-semibold text-white border-2 border-transparent rounded-lg"
              >
                Continue
                <span className="pl-2">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.75 3.75L15 9L9.75 14.25M3 9H15H3Z"
                      stroke="#FFFEFD"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>


  )



}
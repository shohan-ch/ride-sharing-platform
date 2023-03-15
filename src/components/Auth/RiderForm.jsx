import CheckBox from "../Forms/CheckBox"
import InputField from "../Forms/InputField"

export default () => {

  return (

    <>
      <section className="sec lg:flex justify-center items-center lg:pt-[10px] 2xs:w-full 2xs:block 2xs:h-full md:block md:w-full md:h-full dark:bg-dark-bg">
        <div className="lg:w-[528px] lg:h-auto lg:px-10 2xs:px-5 2xs:pb-20 sm:pb-20 dark:bg-dark-bg">
          <div className="lg:dark:border 2xs:pb-10 2xs:dark:border-0 sm:pb-3 rounded-2xl sm:dark:border-0 py-5 border">
            <div className="overflow-y-auto p-5 overflow-x-hidden h-full xl:h-[600px] 2xl:h-[490px] 3xl:h-full lg:text-left lg:pt-0 2xs:text-left 2xs:pt-[50px] sm:text-left sm:px-10 sm:pt-[120px]">
              <h1 className="text-black font-bold text-26 2xs:text-[18px] mb-2 dark:text-gray-2">
                Provide your user information
              </h1>
              <p className="2xs:text-sm 2xs:mb-8 sm:mb-5 dark:text-gray-2 mb-8 text-lg font-normal text-gray-600">
                Driver will confirm it's you upon arrival. We will also send receipts
                to your email address.
              </p>
              <div>
                <div className="2xs:mb-4 sm:mb-8">
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
                </div>
                <div className="2xs:mb-4 sm:mb-8">
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="flex items-center mt-8 mb-6">
                  <CheckBox checkedHandler={(e) => console.log(e.target.checked)} label="I hereby declare that all the above information are correct and
                    assure that I will abide by all the rules."/>

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
        </div>
      </section>







    </>


  )



}
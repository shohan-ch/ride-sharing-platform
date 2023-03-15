import { useRouter } from "next/router"
import Button from "../Utils/Button/Button"

export default () => {
  const router = useRouter();

  const loginWithPassHandler = () => {
    router.push('/loginwithPassword')
  }
  const continueHandler = () => {
    router.push('/riderForm')

  }

  return (

    <>
      <section className="lg:flex lg:justify-center lg:items-center 2xs:w-full 2xs:block 2xs:h-full sm:w-full sm:block dark:bg-dark-bg h-screen">
        <div className="lg:w-[528px] lg:h-[472px] lg:rounded-3xl lg:border-0 lg:dark:border bg-white lg:px-10 2xs:pb-20 2xs:dark:border-0 sm:pb-20 sm:dark:border-0 dark:bg-dark-bg">
          <div className="lg:text-center lg:mt-10 lg:pt-0 2xs:text-left 2xs:px-5 2xs:pt-[100px] sm:text-left sm:px-10 sm:pt-[120px]">
            <h1 className="text-26 2xs:text-22 dark:text-gray-2 mb-2 font-bold text-black">
              What is the code?
            </h1>
            <p className="2xs:text-sm 2xs:mb-5 sm:mb-5 dark:text-gray-2 mb-8 text-lg font-normal text-gray-600">
              Enter the code sent to
              <span className="font-semibold"> +1 307 215532.</span>
            </p>
            <div>
              <input
                maxLength={4}
                defaultValue=""
                id="under_textInput"
                className="under_textInput 2xs:float-left 2xs:mt-0 lg:my-10 lg:mx-auto 2xs:mb-10 sm:mb-10 focus:text-primary-500 dark:text-gray-2 dark:under_textInputDark"
              />


              <Button color={"blue"} iconName="rightArrow" iconPosition="right" handler={continueHandler}>Continue</Button>



              <p className="lg:mt-8 lg:text-base 2xs:text-center dark:text-gray-2 text-center">
                Didn’t received code?
                <span className="2xs:ml-4 ml-8 font-bold">
                  <a
                    href="index.html"
                    className="text-primary-500 decoration-primary-500 underline-offset-4 dark:text-gray-2 dark:decoration-gray-2 underline"
                  >
                    Resend Now
                  </a>
                </span>
              </p>
              <div className="text-center">
                <a
                  onClick={loginWithPassHandler}

                  className="cursor-pointer inline-block mt-8 bg-gray-2 rounded-[32px] px-5 py-2 2xs:mt-6 2xs:mx-auto dark:bg-dark-2 dark:text-gray-2 hover:bg-gray-100 transition-all duration-200"
                >
                  Login with password
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>



  )
}
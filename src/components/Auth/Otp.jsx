import { useRouter } from "next/router";
import Button from "../Utils/Button/Button";
import { useState } from "react";
import CustomSnackbar from "@/customMUI/CustomSnackbar";

export default () => {
  const [inputOtp, setInputOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { mobile, otp } = router?.query || "";

  console.log(otp, mobile);

  const loginWithPassHandler = () => {
    router.push("/loginwithPassword");
  };
  const continueHandler = () => {
    if (inputOtp !== otp) {
      setErrorMessage("Your otp doesn't match");
    } else {
      setErrorMessage("");
      setSuccessMessage("Your otp code is match!");
      setTimeout(() => {
        router.push("/riderForm");
      }, 2000);
    }
    setOpen(true);
  };

  return (
    <>
      <CustomSnackbar
        open={open}
        handleClose={() => setOpen(false)}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <section className="h-screen dark:bg-dark-bg sm:block sm:w-full lg:flex lg:items-center lg:justify-center 2xs:block 2xs:h-full 2xs:w-full">
        <div className="bg-white dark:bg-dark-bg sm:pb-20 sm:dark:border-0 lg:h-[472px] lg:w-[528px] lg:rounded-3xl lg:border-0 lg:px-10 lg:dark:border 2xs:pb-20 2xs:dark:border-0">
          <div className="sm:px-10 sm:pt-[120px] sm:text-left lg:mt-10 lg:pt-0 lg:text-center 2xs:px-5 2xs:pt-[100px] 2xs:text-left">
            <h1 className="mb-2 text-26 font-bold text-black dark:text-gray-2 2xs:text-22">
              What is the code?
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-2 sm:mb-5 2xs:mb-5 2xs:text-sm">
              Enter the code sent to
              {/* <span className="font-semibold"> +1 307 215532.</span> */}
              <span className="font-semibold"> {mobile}</span>
            </p>
            <div>
              <input
                onChange={(e) => setInputOtp(e.target.value)}
                maxLength={4}
                defaultValue=""
                id="under_textInput"
                className="under_textInput dark:under_textInputDark focus:text-primary-500 dark:text-gray-2 sm:mb-10 lg:my-10 lg:mx-auto 2xs:float-left 2xs:mt-0 2xs:mb-10"
              />

              <Button
                color={"blue"}
                iconName="rightArrow"
                iconPosition="right"
                handler={continueHandler}
              >
                Continue
              </Button>
              <p className="text-center dark:text-gray-2 lg:mt-8 lg:text-base 2xs:text-center">
                Didn’t received code?
                <span className="ml-8 font-bold 2xs:ml-4">
                  <a
                    href="index.html"
                    className="text-primary-500 underline decoration-primary-500 underline-offset-4 dark:text-gray-2 dark:decoration-gray-2"
                  >
                    Resend Now
                  </a>
                </span>
              </p>
              <div className="text-center">
                <a
                  onClick={loginWithPassHandler}
                  className="mt-8 inline-block cursor-pointer rounded-[32px] bg-gray-2 px-5 py-2 transition-all duration-200 hover:bg-gray-100 dark:bg-dark-2 dark:text-gray-2 2xs:mx-auto 2xs:mt-6"
                >
                  Login with password
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

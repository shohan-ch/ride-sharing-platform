import { useState } from "react";
import CheckBox from "../Forms/CheckBox";
import InputField from "../Forms/InputField";
import Button from "../Utils/Button/Button";
import CustomSnackbar from "@/customMUI/CustomSnackbar";
import Router from "next/router";

const RiderForm = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const inputHandler = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };
  const continueHandler = () => {
    if (
      formData.firstName === "" ||
      /^[a-zA-Z]/.test(formData.firstName) == false
    ) {
      setErrorMessage(
        "First name shouldn't be empty & give a valid first name"
      );
    } else if (
      formData.lastName === "" ||
      /^[a-zA-Z]/.test(formData.lastName) == false
    ) {
      setErrorMessage("Last name shouldn't be empty & give a valid last name");
    } else if (
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(formData.email) === false
    ) {
      setErrorMessage("Please give a valid email.");
    } else if (!checked) {
      setErrorMessage("Please agree the condition.");
    } else {
      setErrorMessage("");

      Router.push("/language");
    }
    setOpen(true);
  };

  console.log(formData);
  return (
    <>
      <CustomSnackbar
        open={open}
        handleClose={() => setOpen(false)}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <section className="sec items-center justify-center dark:bg-dark-bg md:block md:h-full md:w-full lg:flex lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="dark:bg-dark-bg sm:pb-20 lg:h-auto lg:w-[528px] lg:px-10 2xs:px-5 2xs:pb-20">
          <div className="rounded-2xl border bg-white py-5 dark:bg-dark-bg sm:pb-3 sm:dark:border-0 lg:dark:border 2xs:pb-10 2xs:dark:border-0">
            <div className="h-full overflow-y-auto overflow-x-hidden p-5 sm:px-10 sm:pt-[120px] sm:text-left lg:pt-0 lg:text-left xl:h-[600px] 2xl:h-[490px] 3xl:h-full 2xs:pt-[50px] 2xs:text-left">
              <h1 className="mb-2 text-26 font-bold text-black dark:text-gray-2 2xs:text-[18px]">
                Provide your user information
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-2 sm:mb-5 2xs:mb-8 2xs:text-sm">
                Driver will confirm it's you upon arrival. We will also send
                receipts to your email address.
              </p>
              <div>
                <div className="sm:mb-8 2xs:mb-4">
                  <InputField
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                    handeleInputChange={inputHandler}
                  />
                </div>
                <div className="sm:mb-8 2xs:mb-4">
                  <InputField
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                    handeleInputChange={inputHandler}
                  />
                </div>
                <div className="sm:mb-8 2xs:mb-4">
                  <InputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter Email Address"
                    handeleInputChange={inputHandler}
                  />
                </div>
                <div className="mt-8 mb-6 flex items-center">
                  <CheckBox
                    checkedHandler={(e) => setChecked(e.target.checked)}
                    label="I hereby declare that all the above information are correct and
                    assure that I will abide by all the rules."
                  />
                </div>
                {/* <button
                  onclick="success()"
                  className="flex items-center justify-center w-full px-6 py-4 mb-5 text-base font-semibold text-white border-2 border-transparent rounded-lg rounded-5 dark:shadow-dark shadow-one group bg-primary-500 hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:mt-10"
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
                </button> */}
                <Button color="blue" handler={continueHandler}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RiderForm;

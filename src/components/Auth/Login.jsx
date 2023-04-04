import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../Forms/InputField";
import Button from "../Utils/Button/Button";
export default () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    country: "",
  });

  const inputChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  const nextleHandler = (e) => {
    if (formData.mobile == "") {
      setErrorMessage("Field must not be empty!");
      setOpen(true);
      return;
    }
    if (/^[0-9]+$/.test(formData.mobile) === false) {
      setErrorMessage("Please give a valid Mobile Number!");
      setOpen(true);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      router.push("/otp");
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={errorMessage ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {errorMessage && errorMessage}
        </Alert>
      </Snackbar>
      <main className="z-10 mx-auto my-10 dark:bg-dark-bg sm:w-[528px] 2xs:my-0 2xs:w-full">
        <div className="wrapper relative border-2 border-gray-100 p-10 md:shadow-2xl lg:shadow-2xl 2xl:shadow-none 2xs:border-0 2xs:pl-5 2xs:pr-5 2xs:pt-5">
          <div className="">
            <div>
              <h1 className="mb-1 text-26 font-bold text-gray-800 dark:text-gray-2 2xs:text-22">
                What is your mobile numbers
                <span className="2xs:hidden"> or email</span>?
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-2 2xs:mb-6 2xs:text-sm">
                We’ll text an OTP code to verify your number.
              </p>
            </div>
            <div>
              <div className="flex space-x-6 2xs:space-x-10">
                <div className="dropdown relative w-1/6">
                  <button
                    className="dropdown-toggle inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-3.5 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 h-4 w-6"
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
                      className="ml-1 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>open</title>
                      <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"></path>
                    </svg>
                  </button>

                  <ul className="dropdown-menu shadow-one dark:shadow-dark scrollbar-thin scrollbar-thumb-black scrollbar-track-white dark:scrollbar-thumb-dark-stroke dark:scrollbar-track-white absolute z-[9999] hidden max-h-[300px] w-[21rem] overflow-y-auto rounded-lg border border-gray-200 bg-white dark:bg-dark-shape md:w-[28rem]">
                    <li className="dropdown-item flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          United States
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">+1</div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Germany
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">+321</div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          India
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">+097</div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Bangladesh
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">+880</div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Italy
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">
                        +1623
                      </div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Italy
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">
                        +1623
                      </div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Italy
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">
                        +1623
                      </div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Italy
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">
                        +1623
                      </div>
                    </li>
                    <li className="flex cursor-pointer justify-between border-b border-gray-200 p-3 hover:bg-gray-100 dark:hover:bg-slate-800">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-3.5 w-3.5 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-right dark:text-gray-2">
                          Italy
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-2">
                        +1623
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-5/6">
                  <InputField
                    name="mobile"
                    placeholder="+09373732"
                    className="mb-5 !mt-0 block !h-[54px] w-full p-4"
                    handeleInputChange={inputChange}
                  />
                </div>
              </div>

              <Button
                iconName="rightArrow"
                iconPosition="right"
                color="blue"
                handler={nextleHandler}
                isLoading={isLoading}
                disabled={isLoading}
              >
                Next
              </Button>

              <p className="mb-0 text-lg font-normal text-gray-600 dark:text-gray-2 2xs:text-sm">
                By continuing you may receive an SMS for verfication. Message
                and data rates may apply.
              </p>
            </div>

            <div className="grid">
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center text-sm dark:text-gray-2">
                  or
                </p>
              </div>

              <Button iconName="google" iconPosition="left" color="gray">
                Continue with Google
              </Button>
              <Button iconName="apple" iconPosition="left" color="gray">
                Continue with Apple
              </Button>
              <Button iconName="facebook" iconPosition="left" color="gray">
                Continue with Facebook
              </Button>
              <Button iconName="mail" iconPosition="left" color="gray">
                Continue with Email
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

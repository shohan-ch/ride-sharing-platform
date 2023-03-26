import InputField from "@/components/Forms/InputField";
import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import Link from "next/link";
import { useRef } from "react";
export default () => {
  const dateRef = useRef("");
  const timeRef = useRef("");

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header  mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3">
                <Link href="/trip_history/report_safty_isuue">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  I was involved in an accident
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  We are commited to the safety of everyone using our app. If
                  you have been involved in accident, please make sure that you
                  and all parties involved are safe. Immediately notify police
                  and paramedics if necessary.
                  <br />
                  <br />
                  Please let us know what happened by sharing details that will
                  help us to support you. We will get in touch as soon as
                  possible.
                </p>
              </div>
              {/* Form */}
              <form action="#">
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    type="date"
                    innerRef={dateRef}
                    label="Date of accident"
                    handleClick={() => dateRef.current.showPicker()}
                  />
                </div>
                <div className="px-1 2xs:mb-4">
                  <InputField
                    innerRef={timeRef}
                    label="Time of accident"
                    type="time"
                    handleClick={() => timeRef.current.showPicker()}
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    Location of accident
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                    placeholder="Location"
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    Were you in the vehicle?
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                    placeholder=""
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    Was anyone take away in an ambulance or taken to the
                    hospital?
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                    placeholder=""
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    How did the accident occur?
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                    placeholder=""
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="#"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    Accident photos
                  </label>
                  <input
                    type="file"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                  />
                </div>
                <div className="sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-light dark:text-white"
                  >
                    Share additional details
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-[48px] w-full rounded-md bg-white p-2 focus:border focus:border-primary focus:shadow-md focus:outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-0 dark:focus:ring-black"
                    placeholder=""
                  />
                </div>
              </form>

              <TripHistoryList />

              <div className="mx-auto mt-6 mb-16 space-y-4 lg:pt-4 2xs:mt-5">
                <button className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center border bg-white py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]">
                  Change The Trip
                </button>
              </div>
            </div>
            <button
              onclick="location.href='./reservation_confirm.html'"
              className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              Submit Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

import InputField from "@/components/Forms/InputField";
import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import Link from "next/link";
import Router from "next/router";
import { useRef } from "react";
const AccidentReportView = () => {
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
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    innerRef={timeRef}
                    label="Time of accident"
                    type="time"
                    handleClick={() => timeRef.current.showPicker()}
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label=" Location of accident"
                    placeholder="Location"
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Were you in the vehicle?"
                    placeholder=""
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label=" Was anyone take away in an ambulance or taken to the
                    hospital?"
                    placeholder=""
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label=" How did the accident occur?"
                    placeholder=""
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Accident photos"
                    placeholder="Enter Name"
                    type="file"
                  />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    label="Share additional details"
                    placeholder=""
                    type="text"
                  />
                </div>
              </form>

              <TripHistoryList />

              <div className="mx-auto mt-6 mb-16 space-y-4 px-1 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  handler={() => Router.push("/trip_history/business_list")}
                  className="border hover:bg-primary-hover hover:text-white"
                >
                  Change The Trip
                </Button>
              </div>
              <div className="absolute left-0 right-0 mx-5  md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button
                  color="blue"
                  handler={() => Router.push("/trip_history/details")}
                >
                  Submit Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AccidentReportView;

import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Link from "next/link";
import LocationInput from "./LocationInput";

const AddOrChangeStopView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 pt-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1  dark:bg-dark-2 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[650px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="bg-gray-1 pt-2 pb-0 dark:bg-dark-2 md:pb-10">
              <div className="mb-8 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className="mx-auto font-extrabold  text-black dark:text-white lg:ml-[80px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add or Change Stop
                </h2>
              </div>
              {/* Input Setion  Start*/}
              <div className="flex w-full items-center justify-between gap-2 border-b-4 border-white px-5 dark:border-transparent">
                <div className="w-full">
                  <InputFieldWithIcon
                    placeholder="Current Location"
                    leftIconName="dot"
                    className="bg-white "
                  />
                  {/* Add more destination input */}

                  <LocationInput />
                  <LocationInput />
                  <LocationInput />

                  <LocationInput icon={"add"} />
                </div>
              </div>
              {/* Input Section End  */}

              <div className="mb-16 bg-bg-color px-5 pt-20 pb-4 dark:bg-dark-2">
                <img
                  src="/assets/images/request_ride/Frame 875.svg"
                  alt=""
                  className="mb-6"
                />
                <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                  Making changes can affect the price of your trip.
                </h2>
                <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                  If you add a stop or change your destination, your trip total
                  will be updated. Please keep each stop under 3 minutes as a
                  courtesy to your driver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddOrChangeStopView;

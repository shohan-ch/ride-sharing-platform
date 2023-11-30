import RequestRideVehicleList from "@/components/Utils/List/RequestRideVehicleList";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import PersonalRide from "./PersonalRide";
import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";

const ChooseVehicleView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[53vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="relative ">
            <div className="relative pt-2 lg:rounded-t-3xl">
              <div className="h-[300px] overflow-hidden sm:hidden lg:h-[150px] xl:h-[250px] 2xl:h-[200px] 3xl:h-[400px]">
                <img
                  src="/assets/images/request_ride/map/Frame 87.png"
                  className="w-full dark:hidden lg:rounded-t-3xl"
                  alt=""
                />
                <img
                  src="/assets/images/request_ride/map/Group 201.png"
                  className="hidden w-full dark:block lg:rounded-t-3xl"
                  alt=""
                />
              </div>
              <Link
                href="/request_ride/location"
                className="absolute left-5 top-[30px] z-50 "
              >
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="relative -mt-5 bg-bg-color py-2 dark:bg-dark-2 sm:mt-2 lg:rounded-3xl">
              <div className="h-full overflow-y-auto overflow-x-hidden rounded-3xl">
                <div>
                  <div className="sm:hidden">
                    <div className="mx-auto h-[4px]  w-[70px] rounded-lg bg-[#F0F0F0] text-center"></div>
                    <p className="mt-2 text-center text-[12px] text-gray-light dark:text-gray-2">
                      Scroll up to see more
                    </p>
                  </div>
                  {/* <Link href="/request_ride">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link> */}
                  <h2 className=" mb-4 hidden px-5 font-bold dark:text-white sm:mb-8 sm:ml-[100px] sm:block sm:pt-2 md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    Choose your vehicle
                  </h2>

                  {/* Vehicle List */}
                  <RequestRideVehicleList
                    name="Economy"
                    vehicleType="economy"
                    isActive
                    fare="24.50"
                  />
                  <RequestRideVehicleList
                    name="Economy"
                    vehicleType="economyXl"
                    fare="34.50"
                  />
                  <RequestRideVehicleList
                    name="Black"
                    vehicleType="black"
                    fare="34.50"
                  />
                </div>
              </div>
              <div className="rounded-b-3xl bg-bg-color px-5 py-2 dark:bg-dark-2">
                {/* Personal Ride */}
                <PersonalRide />

                {/* Input Setion  Start*/}

                <div className="mb-20">
                  <InputFieldWithIcon
                    handeleClick={() =>
                      Router.push("/request_ride/pickup_note")
                    }
                    placeholder="Leave a pick-up note"
                    className="bg-gray-2"
                    rightIconName="messengerGray"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => Router.push("/request_ride/confirm_ride")}
              className="rounded-5 shadow-one dark:shadow-dark absolute bottom-0 left-0 right-0 mx-5 mb-4 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseVehicleView;

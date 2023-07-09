import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import PersonalRide from "../ChooseVehicle/PersonalRide";
import VehicleInfo from "./VehicleInfo";
const ConfirmRideView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="">
            {/* Map image for mobile */}
            <div className=":-t-3xl relative sm:hidden">
              <div className="h-[300px] overflow-hidden lg:h-[150px] xl:h-[250px] 2xl:h-[200px] 3xl:h-[400px]">
                <img
                  src="/assets/images/request_ride/map/Frame 87.png"
                  className="w-fuln lg:roulded-t-3xl dark:hidden"
                  alt=""
                />
                <img
                  src="/assets/images/request_ride/map/Group 201.png"
                  className="dark:bdden hidden w-full lg:rounded-t-3xl"
                  alt=""
                />
              </div>
              <Link
                href="/request_ride/location"
                className="absolute top-[30px] left-5 z-50 sm:hidden"
              >
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="relative -mt-5 bg-bg-color py-2 dark:bg-dark-2 sm:mt-2 lg:rounded-3xl">
              <div className="h-full overflow-y-auto overflow-x-hidden rounded-3xl lg:h-[150px] xl:h-[250px] 2xl:h-[140px] 3xl:h-full">
                <div className="relative mb-5 flex items-center justify-between bg-bg-color py-2 px-5 dark:bg-[#2C2C35]">
                  <div>
                    <div className="sm:hidden">
                      <div className="mx-auto h-[4px]  w-[70px] rounded-lg bg-[#F0F0F0] text-center"></div>
                      <p className="mt-2 text-center text-[12px] text-gray-light dark:text-gray-2">
                        Almost There!
                      </p>
                    </div>
                    <h2 className="mb-4 hidden font-bold dark:text-white sm:block md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Confirm Ride
                    </h2>
                    {/* Single Vehicle  */}
                    <VehicleInfo />
                  </div>
                </div>
              </div>
              <div className="3xl rl bg-bg-coeor py-2lative px-5 py-2 dark:bg-dark-2">
                <PersonalRide />
                {/* Input Setion  Start*/}
                <div className="mb-40">
                  <InputFieldWithIcon
                    placeholder="Leave a pick-up note"
                    className="bg-gray-2 !pl-5"
                    rightIconName="messengerGray"
                  />
                </div>

                {/* Input Section End  */}

                <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                  <Button color="blue" handler={() => console.log(123)}>
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmRideView;

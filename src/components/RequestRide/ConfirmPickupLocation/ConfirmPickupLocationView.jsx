import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import PickupLocationDetails from "./PickupLocationDetails";
import Router from "next/router";
const ConfirmPickupLocationView = () => {
  // setTimeout(() => {
  //   Router.push("/request_ride/connecting_driver");
  // }, 3000);

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-2 sm:h-[80vh] sm:dark:border-0  lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div>
            {/* Map image for mobile */}
            <div className=":-t-3xl relative ">
              <div className="h-[300px] overflow-hidden sm:hidden lg:h-[150px] xl:h-[250px] 2xl:h-[200px] 3xl:h-[400px]">
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
                href="/request_ride/confirm_ride"
                className="absolute top-[10px] left-5 z-50 "
              >
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="relative -mt-8 rounded-3xl bg-bg-color py-2 dark:bg-dark-2 sm:mt-2">
              <h2 className="mb-4 hidden px-5 pb-5 pt-1 text-center font-bold dark:text-white sm:block md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                Confirm Pickup Location
              </h2>
              <div className="my-7 border-b-[1px] border-gray-2 py-2 sm:border-t-[1px]">
                <p className="text-center text-[12px] font-bold text-gray-light dark:text-gray-2">
                  Drag to set your pick-up spot
                </p>
              </div>
              <div className="mb-[15px] flex items-center px-5">
                <PickupLocationDetails />
                <div>
                  <div>
                    <button
                      onClick={() => Router.push("/request_ride/location")}
                      className="rounded-full bg-gray-2 px-5 py-2 hover:bg-primary-500 hover:text-white hover:duration-300"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* Input Setion  Start*/}

              <div className="mb-32 px-5">
                <InputFieldWithIcon
                  placeholder="Leave a pick-up note"
                  className="bg-gray-2 !pl-5"
                  rightIconName="messengerGray"
                />
              </div>

              {/* Input Section End  */}

              <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button
                  color="blue"
                  handler={() => Router.push("/request_ride/confirming_trip")}
                >
                  Confirm Pick-up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmPickupLocationView;

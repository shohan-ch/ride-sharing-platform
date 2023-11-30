import Button from "@/components/Utils/Button/Button";
import VehicleList from "@/components/Utils/List/VehicleList";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

const VehiclesView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-gray-1 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:pt-2 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px] 2xs:px-2 2xs:pt-0">
              <div className="header mb-10 flex pl-5 md:px-6 lg:pr-[47px] 2xs:mb-5 2xs:pr-3">
                <div>
                  <Link href="/reserve/travel_route">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:mt-2 2xs:text-[18px]">
                  Choose a vehicle
                </h2>
              </div>
              {/* Vehicle  list */}

              <VehicleList
                name="Executive Black Car"
                fare="80"
                vehicleType="car"
                isActive={true}
              />
              <VehicleList name="Sedan Car" fare="80" vehicleType="sedanCar" />

              {/* Veficle info */}
              <div className="px-5 py-10 dark:text-white 2xs:pl-3 2xs:pr-0">
                <p>
                  <span className="inline-block">
                    <Image
                      src="/assets/icons/checkMark.svg"
                      width={12}
                      height={12}
                    />
                  </span>
                  <span>Includes 15 min of complimentary wait time</span>
                </p>
                <p>
                  <span className="inline-block">
                    <Image
                      src="/assets/icons/checkMark.svg"
                      width={12}
                      height={12}
                    />
                  </span>
                  <span>All-inclusive rates</span>
                </p>
                <p>
                  <span className="inline-block">
                    <Image
                      src="/assets/icons/checkMark.svg"
                      width={12}
                      height={12}
                    />
                  </span>
                  <span>Free cancellation up until 60 min before pickup</span>
                </p>
                <a
                  href="#"
                  className="mt-3 block font-bold text-primary-500 dark:text-white"
                >
                  Learn More &gt;
                </a>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={() => Router.push("/reserve/optional_info")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehiclesView;

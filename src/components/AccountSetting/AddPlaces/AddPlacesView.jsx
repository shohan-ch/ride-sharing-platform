import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import LocationList from "@/components/Utils/List/LocationList";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const AddPlacesView = () => {
  const inputRef = useRef();
  const router = useRouter();
  const nextHandler = () => {
    router.push("/reserve/destination");
  };
  const locationData = [
    {
      id: 1,
      location: "Current Location",
      street: "781 mcdonald Rd, San Francisco",
      symbol: "home",
    },
    {
      id: 2,
      location: "Fairmont San Monte Carlo",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
    {
      id: 3,
      location: "San Jose International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
    {
      id: 4,
      location: "Boston International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "plane",
    },
  ];

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clickHandlerAddFavourite = (id) => {
    Router.push("/account_setting/add_favourite");
  };

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-[100vh] bg-gray-1 pt-5  dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px] 2xs:pt-0">
              <div className="pickup_header mb-10 flex md:px-6 lg:px-8 2xs:mb-5 2xs:px-3">
                <Link href="/account_setting/my_places">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto mt-2 inline-block text-center font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add Places
                </h2>
              </div>

              <div className="input_box relative h-auto w-full sm:mb-8 md:px-6 lg:mb-10 lg:px-8 2xs:mb-4 2xs:px-4">
                <InputFieldWithIcon
                  leftIconName="location"
                  rightIconName="coloseIcon"
                  placeholder="Pick-up location"
                  innerRef={inputRef}
                />
              </div>

              <div className="pb-[80px]">
                <LocationList
                  locationData={locationData}
                  clickHandler={clickHandlerAddFavourite}
                />
              </div>
            </div>

            <div className="absolute left-0 right-0 mx-5 hidden md:bottom-0 lg:absolute lg:bottom-[22px] lg:block 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={nextHandler}
              >
                Next
              </Button>
            </div>

            <button
              onClick="location.href=''"
              className="mx-auto mt-8 mb-5 block flex w-[200px] items-center rounded-[71px]  bg-[#29225E] py-4 px-5 text-[16px]  font-bold text-bg-color hover:bg-primary-hover dark:bg-[#493DA8] dark:hover:bg-[#29225E] lg:hidden"
            >
              <svg
                width={27}
                height={24}
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7449 4.08479L18.0949 0.259788C17.9177 0.171149 17.7224 0.125 17.5243 0.125C17.3262 0.125 17.1309 0.171149 16.9538 0.259788L9.87495 3.80046L2.79488 0.259788C2.60044 0.162629 2.3844 0.11679 2.16727 0.126624C1.95013 0.136458 1.73912 0.201639 1.55426 0.315975C1.36941 0.430311 1.21685 0.590007 1.11108 0.779895C1.00532 0.969782 0.94985 1.18356 0.949951 1.40091V17.9759C0.949951 18.4591 1.2228 18.9003 1.65503 19.117L9.30503 22.942C9.48216 23.0307 9.67751 23.0768 9.87559 23.0768C10.0737 23.0768 10.269 23.0307 10.4462 22.942L17.525 19.4014L24.605 22.9408C24.7989 23.0388 25.0148 23.0853 25.2319 23.0757C25.4489 23.0661 25.6599 23.0008 25.8443 22.8859C26.2204 22.6526 26.45 22.2433 26.45 21.8009V5.22591C26.45 4.74269 26.1771 4.30154 25.7449 4.08479ZM11.15 6.01386L16.25 3.46386V17.188L11.15 19.738V6.01386ZM3.49995 3.46386L8.59995 6.01386V19.738L3.49995 17.188V3.46386ZM23.9 19.738L18.8 17.188V3.46386L23.9 6.01386V19.738Z"
                  fill="#FFFEFD"
                />
              </svg>
              <span className="ml-4">Choose on map</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPlacesView;

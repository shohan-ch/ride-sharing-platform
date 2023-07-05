import IconSvg from "@/icons/IconSvg";
import RequestContainer from "./RequestContainer";
import ReserveInfo from "./ReserveInfo";
import LocationList from "@/components/Utils/List/LocationList";
import Router from "next/router";
const HomeView = () => {
  const locationData = [
    {
      location: "Pier 39",
      street: "781 mcdonald Rd, San Francisco",
      symbol: "star",
    },
    {
      location: "Fairmont San Monte Carlo",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
  ];

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div
            className="relative h-[200px] bg-gray-300  bg-cover bg-no-repeat lg:rounded-t-3xl"
            style={{
              backgroundImage:
                "url(/assets/images/request_ride/Street_light.png)",
            }}
          >
            <IconSvg name={"menu"} />
            <h2 className="mx-auto pt-7 text-center text-black 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
              <span>Get</span>
              <span className="font-extrabold">Ryd</span>
            </h2>
          </div>
          <div className="absolute top-[180px] left-0 right-0 rounded-3xl border-0 bg-bg-color py-4 px-5 dark:bg-dark-bg">
            <div className="overflow-y-auto overflow-x-hidden lg:h-[290px] xl:h-[290px] 2xl:h-[300px] 3xl:h-[530px] ">
              <div>
                <h1 className="my-4 font-extrabold text-black dark:text-gray-2 2xl:text-[20px] 3xl:text-[24px] 2xs:text-26">
                  Hello, Md. Sadat Hussein
                </h1>
                <ReserveInfo />

                <div className="mb-5 flex w-full justify-center gap-4">
                  <RequestContainer
                    heading="Request Now"
                    subHeading="Schedule a trip for your upcoming travel itinerary."
                    iconName="carBgBlue"
                    color="bg-[#F8F8FC]"
                    clickHandler={() => Router.push("/request_ride/location")}
                  />

                  <RequestContainer
                    heading="Reserve for Later"
                    subHeading="Schedule a trip for your upcoming travel itinerary."
                    iconName="carBgRed"
                    color="bg-[#FCF3F7]"
                  />
                </div>
                <div className="border-t-[1px] border-[#F6F6F6] px-5 pb-5 dark:border-[#202028]">
                  {/* Search Bar */}
                  <div className="relative mt-3 mb-4 flex items-center">
                    <label htmlFor="search-btn" className="absolute pl-4">
                      <IconSvg name={"searchBar"} />
                    </label>
                    <input
                      type="text"
                      id="search-btn"
                      placeholder="Where to?"
                      className="w-full rounded-3xl bg-[#F8F8FC] py-4 pl-16 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-[#2C2C35] dark:text-white dark:placeholder-gray-400 dark:ring-2 dark:ring-white dark:focus:border-black dark:focus:outline-1"
                    />
                  </div>

                  {/* Location List */}

                  <div style={{ marginLeft: "-20px" }}>
                    <LocationList locationData={locationData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;

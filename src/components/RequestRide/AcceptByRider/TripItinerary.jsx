import Link from "next/link";

const TripItinerary = () => {
  return (
    <>
      <div className="mb-6 px-5">
        <div className="mt-8 flex justify-between px-1">
          <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
            Trip Itinerary
          </h1>
        </div>
        <div className="ml-1 pt-3">
          <div className>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#4DAA6C]" />
                </div>
                <div className="mt-1 h-[30px] w-px bg-gray-300" />
              </div>
              <div className="pb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  San Francisco Station
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-black dark:bg-white"></div>
                </div>
                <div className="mt-1 h-[30px] w-px bg-gray-300" />
              </div>
              <div className="mb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  Salesforce Park
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-black dark:bg-white"></div>
                </div>
                <div className="mt-1 h-[30px] w-px bg-gray-300" />
              </div>
              <div className="mb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  Fairmont San Francisco
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#EC1D1D]" />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  54 Mint Ristorante Italiano
                </p>

                <Link
                  href={"/request_ride/change_stop"}
                  className="mb-1 text-[14px] font-bold dark:text-gray-2"
                >
                  Add or Change
                </Link>
                {/* <a
                  href="./add_or_change_stop.html"
                  className="mb-1 text-[14px] font-bold dark:text-gray-2"
                >
                  Add or Change
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripItinerary;

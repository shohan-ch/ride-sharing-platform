export default () => {
  return (
    <>
      <div>
        <div className="flex justify-between px-1 mt-8">
          <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
            Trip Itinerary
          </h1>
          <div>
            <a
              href="./receipt.html"
              className="shadow-one dark:shadow-dark flex h-[35px] items-center justify-center rounded-[48px] bg-primary-500 px-5 text-[12px] text-white shadow-sm hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:text-[10px]"
            >
              Receipt
            </a>
          </div>
        </div>
        <div className="pt-3 ml-1">
          <div className="">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#4DAA6C]"></div>
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
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="dark:bg-white flex items-center justify-center w-3 h-3 bg-black rounded-full"></div>
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
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="dark:bg-white flex items-center justify-center w-3 h-3 bg-black rounded-full"></div>
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
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className=" flex h-3 w-3 items-center justify-center rounded-full bg-[#EC1D1D]"></div>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  54 Mint Ristorante Italiano
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

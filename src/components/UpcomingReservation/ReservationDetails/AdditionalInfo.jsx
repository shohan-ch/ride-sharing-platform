const AdditionalInfo = () => {
  return (
    <>
      <div className="mx-auto mt-5 rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
        <div className="mb-4 flex">
          <div>
            <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
              Additional Info
            </h1>
          </div>
        </div>

        <div className="flex gap-x-11">
          <div className="whitespace-nowrap">
            <p>
              <span className="mb-2 inline-block text-[14px] text-gray-light dark:text-[#CACACA]">
                Flight Number:
              </span>
            </p>
            <p>
              <span className="mb-1 inline-block  text-[14px] text-gray-light dark:text-[#CACACA]">
                Pickup Sign:
              </span>
            </p>
            <p>
              <span className="mb-[22px] inline-block  text-[14px] text-gray-light dark:text-[#CACACA] 2xs:mb-[40px]">
                Notes for Chauffeur:
              </span>
            </p>
            <p>
              <span className="mb-[5px] inline-block  text-[14px] text-gray-light dark:text-[#CACACA]">
                Book for:
              </span>
            </p>
            <p>
              <span className="mb-2 inline-block  text-[14px] text-gray-light dark:text-[#CACACA]">
                Reference Number:
              </span>
            </p>
          </div>

          <div>
            <p className="mb-[14px] text-[13px] font-medium">#BX876KJ1</p>
            <p className="mb-2 text-[13px] font-medium">John from WeWork</p>
            <p className="mb-2 text-[13px] font-medium">
              Please call me once you arrive at pickup location.
            </p>
            <p className="mb-2 text-[13px] font-medium">Myself</p>
            <p className="mb-2 text-[13px] font-medium">551 - 549 -119</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;

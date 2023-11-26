const CountryFlagList = ({ title, flag, clickHandler }) => {
  let images = {
    arabic: "/assets/images/flags/arabic.png",
    chrome: "/assets/images/wallet/chrome.svg",
    expensify: "/assets/images/wallet/expensify.svg",
    expensya: "/assets/images/wallet/expensya.svg",
    happy: "/assets/images/wallet/happy.svg",
  };
  return (
    <>
      <button className="block" value={title}>
        <div className="mb-8 flex cursor-pointer gap-x-6">
          <div className="self-center">
            <img src={images[flag]} alt={flag} />
          </div>
          <div className="self-center ">
            <p className="pr-3 text-[18px]  font-medium text-black dark:text-white 2xs:text-[14px]">
              {title}
            </p>
          </div>
        </div>
      </button>

      {/* <div className="flex mb-8 cursor-pointer gap-x-6">
        <div className="self-center">
          <img src={images[image]} />
        </div>
        <div className="self-center ">
          <p className="pr-3 text-[18px]  font-medium text-black dark:text-white 2xs:text-[14px]">
            {title}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default CountryFlagList;

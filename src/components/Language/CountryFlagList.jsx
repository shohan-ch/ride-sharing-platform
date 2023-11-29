import IconSvg from "@/icons/IconSvg";

const CountryFlagList = ({ language, clickHandler }) => {
  let images = {
    arabic: "/assets/images/flags/arabic.png",
    chrome: "/assets/images/wallet/chrome.svg",
    expensify: "/assets/images/wallet/expensify.svg",
    expensya: "/assets/images/wallet/expensya.svg",
    happy: "/assets/images/wallet/happy.svg",
  };
  return (
    <>
      <button
        className="block w-full border-b border-gray-1 py-3 pl-0 pr-2 hover:border-gray-400 hover:duration-300 "
        value={language.name}
      >
        <div className="mx-auto my-2 flex cursor-pointer items-center justify-between gap-x-6">
          <div className="flex items-center gap-x-4">
            <div>
              <img src={images[language.flag]} alt={language.flag} />
            </div>
            <div>
              <p className="pr-3 text-[18px]  font-medium text-black dark:text-white 2xs:text-[14px]">
                {language.name}
              </p>
            </div>
          </div>

          {language.isActive && <IconSvg name={"checkMark"} />}
        </div>
      </button>
    </>
  );
};

export default CountryFlagList;

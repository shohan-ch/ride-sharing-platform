const ExProgramList = ({ title, image, clickHandler }) => {
  let images = {
    certify: "/assets/images/wallet/certify.svg",
    chrome: "/assets/images/wallet/chrome.svg",
    expensify: "/assets/images/wallet/expensify.svg",
    expensya: "/assets/images/wallet/expensya.svg",
    happy: "/assets/images/wallet/happy.svg",
  };
  return (
    <>
      <div className="mb-8 flex cursor-pointer gap-x-6">
        <div className="self-center">
          <img src={images[image]} />
        </div>
        <div className=" self-center">
          <p className="pr-3 text-[18px]  font-medium text-black dark:text-white 2xs:text-[14px]">
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExProgramList;

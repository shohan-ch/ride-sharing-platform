import Button from "../Utils/Button/Button";
import NavigateButon from "../Utils/Button/NavigateButon";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border  bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-screen 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full dark:border-[#2C2C35] 2xl:h-[490px] 3xl:h-[600px] ">
              <div className="pickup_header mb-10 flex md:pl-[16px] md:pr-[76px] lg:pl-[15px] lg:pr-[30px] 2xs:mb-3 2xs:px-4">
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Trip History
                </h2>
              </div>
              <div className="rounded-5 mx-4 mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <div className="space-x-2 pb-2 2xs:pt-3">
                  <NavigateButon isActive={true}>Past</NavigateButon>
                  <NavigateButon>Business</NavigateButon>
                  <NavigateButon>Upcoming</NavigateButon>
                </div>
              </div>
              <div>
                <div className="mt-[120px] text-center sm:px-10 sm:pt-4 lg:px-2 lg:pt-0 2xs:px-0 2xs:pt-6">
                  <h1 className="mt-5 mb-2 font-extrabold text-black dark:text-gray-2 2xl:mt-5 2xl:text-[20px] 3xl:text-[24px] 2xs:mb-2 2xs:mt-1 2xs:text-26">
                    No Rides Taken
                  </h1>
                  <p className="mb-4 text-lg font-normal text-[#5C5C5C] dark:text-gray-2 2xl:mb-3 3xl:mb-6 3xl:text-lg 2xs:mb-6 2xs:text-sm">
                    You don’t have any completed rides for us to show yet. Taka
                    your first ride today!
                  </p>
                </div>
              </div>

              <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button
                  color="blue"
                  handler={() => Router.push("/reserve/confirmation")}
                >
                  Request Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Router from "next/router";
const BusinessProfileView = () => {
  const clickHandeler = () => {
    Router.push("/reserve/reserve_ride");
  };
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-white dark:bg-dark-bg 2xs:block 2xs:h-full 2xs:w-full">
        <div className="lg:darkpy-4 smorder 2xs:da-0rlgorder-0 sm:dk2x:order-0 b rounded-2xl py-4">
          <div className="h-full w-[428px] overflow-y-auto overflow-x-hidden dark:bg-dark-bg sm:pb-3 xl:h-[600px] 2xl:h-[490px]  3xl:h-full  2xs:w-auto 2xs:pb-10">
            <div className="mt-7">
              <img
                className="mx-auto dark:hidden dark:opacity-0"
                src="/assets/images/wallet/Frame 1148.png"
                alt="img"
              />
              <img
                className="mx-auto hidden rounded-3xl opacity-0 dark:block dark:opacity-100"
                src="/assets/images/wallet/Frame 1148 (1).png"
                alt="img"
              />
            </div>
            <div className="relative sm:px-5 sm:pt-[120px] sm:text-left lg:pt-0 2xs:px-5 2xs:pt-0 2xs:text-left">
              <h1 className="mt-3 mb-5 text-32 font-extrabold text-black dark:text-gray-2 2xs:mb-8 2xs:mt-0 2xs:text-26">
                Set Business Profile
              </h1>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"avatar"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create individual account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Get receipts email to a work inbox, keep work trips
                    separate, and more...
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"avatar2"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create a team account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Track your overall team expenses easily by adding your
                    colleagues
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"refresh"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Join an existing organization
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Link your account to a business and start expending eligible
                    rides
                  </p>
                </div>
              </div>
              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <Button color="blue" handler={clickHandeler}>
                  Set Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProfileView;

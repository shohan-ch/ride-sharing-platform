import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const TrustedContactView = () => {
  const clickHandeler = () => {
    console.log("button click");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full  lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-6 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[490px] 3xl:h-[750px] 2xs:px-0  2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[30px] md:pb-7">
              <Link href="/help/payment_option">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="mx-5">
              <img
                src="/assets/images/help/trusted_conact_banner.png"
                className="mx-auto block h-full w-full px-5 dark:hidden"
                alt=""
              />
              <img
                src="/assets/images/help/trusted_conact_banner_dark.png"
                className="mb-[50px] hidden h-full w-full px-5 dark:block md:mb-12"
                alt=""
              />
              <div className="mt-[50px] mb-9 text-center md:mt-12 md:mb-7">
                <h1 className="text-left text-2xl font-bold  text-[#1A1A1A] dark:text-white md:text-2xl">
                  Keep your friends or family updated during rides
                </h1>
              </div>
              <div>
                <div className="mb-[25px] flex items-center border-b-[1px] border-[#F6F6F6] pb-[25px] dark:border-[#2C2C35] md:mb-7  md:pb-7">
                  <img src="/assets/images/help/location.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Share trip status{" "}
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You will be able to share your live location with one or
                      more contacts during any GetRyd trip.{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-[50px] flex items-center md:mb-[100px]">
                  <img src="/assets/images/help/body.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Set your emergency contacts
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You can make a trusted contacted as an emergency contact.
                      GetRyd can call them if we can’t reach you, in case of an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <Button color="blue" handler={clickHandeler}>
                  Add Trusted Contact
                </Button>
              </div>

              {/* <div className="mb-[71px] md:mb-[80px]">
                <button
                  onclick="location.href='./choose_trusted_contact.html'"
                  className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
                >
                  Add Trusted Contact
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedContactView;

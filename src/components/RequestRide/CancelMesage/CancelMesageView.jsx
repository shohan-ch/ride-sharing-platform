import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";

const CancelMesageView = () => {
  setTimeout(() => {
    Router.push("/request_ride");
  }, 1000);

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:dark:border-0">
          <div className="border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:rounded-3xl lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className=" rounded-3xl blur-[2px] brightness-75">
              <div className="absolute top-7 mb-12 flex items-center px-5 lg:hidden">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>

              <div className="h-full w-full overflow-hidden sm:h-[80vh] lg:rounded-3xl">
                <div className="lg:hidden">
                  <img
                    className="w-full dark:hidden"
                    src="/assets/images/request_ride/Group 199.jpg"
                    alt=""
                  />
                  <img
                    className="hidden w-full dark:block"
                    src="/assets/images/request_ride/Group 199_dark.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 top-0 right-0 left-0  my-auto mx-auto h-[300px] w-[90%] rounded-3xl bg-bg-color py-5 dark:bg-dark-2">
              <img
                className="dark:hidden"
                src="/assets/images/request_ride/freepik--Rocket--inject-144.png"
                alt=""
              />
              <img
                className="hidden dark:block"
                src="/assets/images/request_ride/freepik--Rocket--inject-144 -dark.png"
                alt=""
              />
              <div className="absolute bottom-[40px] right-0 left-0 mx-auto text-center">
                <h2 className="mb-4 text-26 font-bold dark:text-white">
                  Thank you!
                </h2>
                <p className="text-[16px] font-[450] text-gray-light dark:text-gray-1">
                  Your answer helps us improve our GetRyd app.
                </p>
              </div>
            </div>
            <div className="absolute top-12 right-5">
              <button
                onclick="location.href='home.html'"
                className="text-[16px ] rounded-3xl bg-[#29225E] py-2 px-3 font-bold text-white dark:bg-transparent sm:hidden"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancelMesageView;

import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
import BusinessProfileInfo from "./BusinessProfileInfo";
const BusinessProfileView = () => {
  const clickHandeler = () => {
    Router.push("/wallet/business_email");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-gray-1 pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[480px] 3xl:h-[760px] 2xs:pt-0">
              <div className="pickup_header mb-10 flex pl-5 md:px-6 lg:pr-8 2xs:mb-5 2xs:pr-3">
                <Link href="/wallet">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className=" mx-auto mt-2 inline-block text-center  font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Rider Profile
                </h2>
              </div>

              <div className="mx-4 mt-4 rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
                {/* <ProfileInformation /> */}
                <BusinessProfileInfo />

                <Link href={"/rider_profile/verify_email"}>
                  <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                    <div className="flex items-center">
                      <IconSvg name={"profileMail"} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold dark:text-white">
                        Work Email{" "}
                        <span className="text-[#4DAA6C]">Verified</span>
                      </h3>
                      <p className="text-xs text-gray-light dark:text-white/60">
                        sayem@rootsoftit.com
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                  <div className="flex items-center">
                    <IconSvg name={"cardRed"} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold dark:text-white">
                      Payment Method
                    </h3>
                    <p className="text-xs text-gray-light dark:text-white/60">
                      paypal
                    </p>
                  </div>
                </div>

                <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                  <div className="flex items-center">
                    <IconSvg name={"report"} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold dark:text-white">
                      Travel Reports
                    </h3>
                    <p className="text-xs text-gray-light dark:text-white/60">
                      Every month
                    </p>
                  </div>
                </div>

                <Link href={"/wallet/expense_program"}>
                  <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                    <div className="flex items-center">
                      <IconSvg name={"program"} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold dark:text-white">
                        Expense program
                      </h3>
                      <p className="text-xs text-gray-light dark:text-white/60">
                        Expensify
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProfileView;

import Link from "next/link";
import InfoButton from "../Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import NavigateButon from "../Utils/Button/NavigateButon";
import Router from "next/router";

const WalletIndex = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[480px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <Link href="#">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Wallet
                </h2>
              </div>
              {/* Item content */}
              <div className="item mx-auto rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
                <div className="rounded-5 mx-2 flex justify-between rounded-lg pb-3 dark:text-white">
                  <p className="font-bold md:text-[16px] lg:text-[15px] 2xs:text-[12px]">
                    Total Wallet Balance
                  </p>
                  <span className="cursor-pointer">
                    <IconSvg name={"usd"} />
                  </span>
                </div>
                <div className=" flex justify-between px-2">
                  <h1 className="self-end font-extrabold text-black dark:text-gray-2 2xl:text-[28px] 2xs:mb-2 2xs:text-[20px]">
                    <span>$45.54</span>
                  </h1>
                  <div>
                    <NavigateButon isActive={true}>+ Add Funds</NavigateButon>
                    {/* <a
                      href="#"
                      className="shadow-one dark:shadow-dark flex h-[35px] items-center justify-center rounded-[48px] bg-primary-500 px-5 text-[12px] text-white shadow-sm hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:text-[10px]"
                    >
                      + Add Funds
                    </a> */}
                  </div>
                </div>
              </div>
              {/* Payment Defaults */}
              <div className=" mx-auto mt-4 rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
                <div className="item rounded-5 mx-2 rounded-lg pb-6 dark:text-white">
                  <p className="mb-6 font-bold md:text-[14px] lg:text-[18px] 2xs:text-[16px]">
                    Payment defaults
                  </p>
                  <InfoButton
                    heading="Personal"
                    subHeading={"Paypal"}
                    icon={"avatar"}
                    clickHandler={() => console.log("button")}
                  />

                  <InfoButton
                    heading="Business"
                    subHeading={"Not set up yet"}
                    icon={"redLagage"}
                    clickHandler={() => console.log("button")}
                  />
                </div>
                <div className="item rounded-5 mx-2 rounded-lg pb-6 dark:text-white">
                  <p className="mb-6 font-bold md:text-[14px] lg:text-[18px] 2xs:text-[16px]">
                    Payment methods
                  </p>

                  <InfoButton
                    heading="Paypal"
                    subHeading={"payment@rootsoftit.com"}
                    icon={"paypal"}
                    clickHandler={() => console.log("button")}
                  />

                  <InfoButton
                    heading="Add payment method"
                    icon={"plusPayment"}
                    clickHandler={() => Router.push("wallet/payment_method")}
                  />
                </div>
                <div className="item rounded-5 mx-2 rounded-lg pb-6 dark:text-white">
                  <p className="mb-6 font-bold md:text-[14px] lg:text-[18px] 2xs:text-[16px]">
                    Add Code
                  </p>

                  <InfoButton
                    heading="Add Promo Code"
                    icon={"promoCode"}
                    iconTwo={"rightGrayArrow"}
                    clickHandler={() => console.log("button")}
                  />

                  <InfoButton
                    heading="Add Voucher Code"
                    icon={"boucherCode"}
                    iconTwo={"rightGrayArrow"}
                    clickHandler={() => console.log("button")}
                  />
                </div>
                <div className="item rounded-5 mx-2 rounded-lg dark:text-white">
                  <p className="mb-6 font-bold md:text-[14px] lg:text-[18px] 2xs:text-[16px]">
                    Add Code
                  </p>

                  <InfoButton
                    heading="Promotions"
                    icon={"mike"}
                    iconTwo={"rightGrayArrow"}
                    clickHandler={() => console.log("button")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WalletIndex;

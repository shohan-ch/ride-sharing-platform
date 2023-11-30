import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";

const PaymentMethodView = ({ backLink }) => {
  // let link = backLink;
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex  lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:pt-2 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full  overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="flex justify-between mb-10 pickup_header lg:pl-1 2xs:mb-3 ">
                {backLink == "/language" && (
                  <Link href={`${backLink}`}>
                    <img src="/assets/icons/back.svg" alt="svg_icon" />
                  </Link>
                )}

                {backLink !== "/language" && (
                  <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                    Payment Method
                  </h2>
                )}

                {backLink === "/language" && (
                  <h2
                    onClick={() => Router.push("/request_ride")}
                    className=" cursor-pointer font-extrabold text-black dark:text-gray-2   2xl:text-[20px] 2xs:text-[18px]"
                  >
                    Later
                  </h2>
                )}
              </div>
              <div className="px-5 py-6 mx-1 mt-8 bg-gray-100 rounded-lg rounded-5 dark:bg-dark-2 dark:text-white">
                <div className="mb-3 item">
                  <span className="inline-block">
                    <IconSvg name={"dollar"} />
                  </span>
                  <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                    You have not added
                    <br />
                    any payment methods yet!
                  </p>
                  <p className="pt-2 text-sm font-normal text-gray-600 dark:text-gray-2">
                    To book your first ride, please add a payment method to your
                    account.
                  </p>
                </div>
              </div>
              <div className="px-1 pt-4 mx-auto">
                <Button
                  className="hover:shadow-md"
                  color={"gray"}
                  iconPosition="left"
                  iconName="plus"
                  handler={() =>
                    Router.push({
                      pathname: backLink ? `${backLink}/card` : `/payment/card`,
                      query: {
                        backLink: backLink,
                      },
                    })
                  }
                >
                  Add Card
                </Button>
              </div>
              <div className="mx-auto px-[6px] py-1 pb-10 dark:text-white 2xs:px-1">
                <h1 className="font-extrabold text-black 2xs:text-18 dark:text-gray-2 2xl:text-22 2xs:mb-2">
                  Choose other payment method
                </h1>

                <Button
                  className="hover:shadow-md"
                  color={"gray"}
                  iconPosition="left"
                  iconName="paypal"
                >
                  Paypal
                  <IconSvg name={"checkMark"} />
                </Button>
                <Button
                  className="hover:shadow-md"
                  color={"gray"}
                  iconPosition="left"
                  iconName="apple"
                >
                  Apple Pay
                </Button>

                <Button
                  className="mb-10 hover:shadow-md"
                  color={"gray"}
                  iconPosition="left"
                  iconName="google"
                >
                  Google Pay
                </Button>

                {/* <div className="service-card shadow-successShadow xs:w-[342px] xs:h-[68px] xs:pr-4 xs:mb-4 flex flex-row items-center justify-between bg-gray-3 pr-6 transition hover:cursor-pointer hover:shadow-md dark:bg-dark-2 dark:hover:bg-slate-600 sm:mb-4 sm:h-[85px] sm:w-auto sm:pr-4 md:mb-[10px] md:w-auto md:pr-5 xl:mb-4 xl:pr-6 2xs:mb-3 2xs:h-[60px]">
                  <Button color={"gray"} iconPosition="left" iconName="google">
                    Google Pay
                  </Button>
                </div> */}
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5  md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={() => Router.push("/request_ride")}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentMethodView;

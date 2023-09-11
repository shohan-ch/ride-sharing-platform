import InputField from "@/components/Forms/InputField";
import Switch from "@/components/Forms/Switch";
import Button from "@/components/Utils/Button/Button";
import Router, { useRouter } from "next/router";
import Link from "next/link";

const RideAccessibilityView = () => {
  const router = useRouter();
  // const { backLink } = router?.query || "";
  // console.log(backLink);
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pl-1 lg:pr-[62px] 2xs:mb-3 2xs:pr-4 2xs:pl-1">
                <Link href={"/account_setting"}>
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Ride Accessibility
                </h2>
              </div>

              <div className="rounded-5 mx-auto rounded-lg px-1 py-3 dark:text-white">
                <h1 className="mb-8 text-[22px] font-bold text-[#1A1A1A] dark:text-white">
                  Let us know if you have any special needs
                </h1>

                <div className="pb-10 sm:mb-6 2xs:mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="mb-1 text-[16px] text-[#1A1A1A] dark:text-gray-1 md:font-bold">
                        Help getting in your ride
                      </h1>
                      <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2  md:font-medium ">
                        Your driver will walk you to your ride
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="pb-10 sm:mb-6 2xs:mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="mb-1 text-[16px] text-[#1A1A1A] dark:text-gray-1 md:font-bold">
                        Prefer chat over phone calls
                      </h1>
                      <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2  md:font-medium ">
                        Your driver won’t call you on the phone
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="pb-10 sm:mb-6 2xs:mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="mb-1 text-[16px] text-[#1A1A1A] dark:text-gray-1 md:font-bold">
                        Important alerts via voice
                      </h1>
                      <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2  md:font-medium ">
                        You’ll hear updates on your journey
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              {/* <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button
                  color="blue"
                  handler={() => Router.push("/reserve/reservation_summary")}
                >
                  Save Trusted Contact
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RideAccessibilityView;

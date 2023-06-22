import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import Link from "next/link";

const LostItemFormOneView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border bg-gray-1 pr-4  pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 ">
                <Link href="/trip_history/lost_item">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  My friend/relative lost their phone during their GetRyd trip
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  If someone you know left their phone in a GetRyd car, they can
                  call the driver by logging in to help.getryd.com using their
                  credentials. However, if they’re unable to login to
                  help.getryd.com, please share the following details with us.
                </p>
              </div>
              {/* Form */}
              <form action="#">
                <div className="px-1 sm:mb-8 2xs:mb-4">
                  <InputField
                    label="Registered name of the rider who lost their phone"
                    placeholder="Enter Name"
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-8 2xs:mb-4">
                  <InputField
                    label="Registered mobile number of the rider"
                    placeholder="Enter Mobile"
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-8 2xs:mb-4">
                  <InputField
                    label="Alternate contact number of the rider"
                    placeholder="Enter Mobile"
                    type="text"
                  />
                </div>
                <div className="px-1 sm:mb-8 2xs:mb-4">
                  <InputField
                    label="Would you fine sharing the alternate number the driver
                    partner? If yes, we would share the number with your driver
                    to co-ordinate the return"
                    placeholder=""
                    type="text"
                  />
                </div>
              </form>
              <div className="m-0">
                <TripHistoryList isActive={true} />
              </div>
              <div className="mx-auto mb-20 space-y-4 px-1 lg:pt-4">
                <Button color="gray" className="h-12 border">
                  {" "}
                  Change The Trip
                </Button>
              </div>
            </div>

            {/* <Button color="blue"> Submit Info</Button> */}

            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button color="blue">Submit Info</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LostItemFormOneView;

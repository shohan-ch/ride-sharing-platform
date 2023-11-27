import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import MessageProfile from "./MessageProfile";

const MessageView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color py-5 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:h-[60vh] sm:pt-0 sm:text-left lg:rounded-3xl lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pt-2 pb-[25px] dark:bg-dark-bg md:pb-10">
              <div className="relative mb-5 flex items-start justify-center border-b-[1px] border-gray-2 px-5 pb-5">
                <Link
                  href="/request_ride/driver_profile"
                  className="absolute left-4 "
                >
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <MessageProfile />
                <a className="absolute right-4" href="tel:+01234567890">
                  <IconSvg name={"mobile3"} />
                </a>
              </div>
              <div className="border-b-[1px] border-gray-2 px-5 pb-5">
                <div className="text-center">
                  <p className="text-[14px] text-gray-light dark:text-gray-1">
                    Wed, Mar 08, 12:21 PM
                  </p>
                  <p className="mt-2 text-[14px] font-bold text-gray-light dark:text-gray-1">
                    Keep your account safe - never share personal or account
                    information in this chat including phone numbers, PINs, or
                    passcodes. GetRyd will never ask for this information over
                    chat.
                  </p>
                </div>
              </div>
              <div className="px-5">
                <div className="mt-4 mb-10 flex justify-end">
                  <div>
                    <p className="mb-2 rounded-l-2xl rounded-t-2xl bg-[#29225E] p-4 font-bold text-white dark:bg-[#493DA8]">
                      Where are you?
                    </p>
                    <p className="text-right text-[14px] text-gray-light dark:text-gray-1">
                      Delivered
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col justify-start">
                  <div>
                    <p className="mb-2 w-fit rounded-r-2xl rounded-t-2xl bg-[#FCF3F7] p-4 font-bold text-black dark:bg-[#2C2C35] dark:text-white">
                      I am on the way.
                    </p>
                    <p className="mb-2 max-w-[300px] rounded-r-2xl rounded-t-2xl bg-[#FCF3F7] p-4 font-bold text-black dark:bg-[#2C2C35] dark:text-white">
                      I will call you as soon as I reach the pickup location
                    </p>
                    <p className="text-[14px] text-gray-light dark:text-gray-1">
                      Sent 5:05 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="mt-8 overflow-auto ">
              <div className="mb-5 flex w-[600px] items-center gap-4 px-5">
                <button className="rounded-3xl bg-gray-1 px-4 py-2 dark:bg-dark-2 dark:text-gray-1">
                  I'm here
                </button>
                <button className="rounded-3xl bg-gray-1 px-4 py-2 dark:bg-dark-2 dark:text-gray-1">
                  Be right there
                </button>
                <button className="rounded-3xl bg-gray-1 px-4 py-2 dark:bg-dark-2 dark:text-gray-1">
                  Please call me when your reach
                </button>
              </div>
            </div>
          </div>
          {/* Input Setion  Start*/}

          <div className="relative mx-auto px-5">
            <InputFieldWithIcon
              placeholder="Leave a pick-up note"
              className="bg-gray-2 !pl-5"
              rightIconName="messengerGray"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageView;

import Link from "next/link";
import Button from "../Utils/Button/Button";
const ReferFriendHomeView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex 2xs:mb-3 2xs:pr-4">
                <div>
                  {/* <Link href="/">
                    <img src="/assets/icons/back.svg" alt="svg_icon" />
                  </Link> */}
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Refer Friends
                </h2>
              </div>
              {/* Item content */}
              <div className="rounded-5 mx-4 mx-auto mt-8 rounded-lg px-5 py-6 dark:text-white">
                <div className="item mb-3 text-center">
                  <span className="inline-block">
                    <img
                      className="h-full w-full"
                      src="/assets/images/refer_friends/image 158.png"
                      alt="img"
                    />
                  </span>
                </div>
                <p className="text-center font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Invite your friends and travel for less
                </p>
                <p className="pt-2 text-center text-sm font-normal text-gray-600 dark:text-gray-2">
                  When your friends have registered and made their first
                  journey, you’ll receive US$3.00 discount in your next 3 rides
                </p>
              </div>
              <div className="mt-8 flex justify-between">
                <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
                  MDSADATHUSS589584
                </h1>
                <div>
                  <a
                    href=""
                    className="shadow-one dark:shadow-dark flex h-[35px] items-center justify-center rounded-[48px] bg-primary-500 px-5 text-[12px] text-white shadow-sm hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:text-[10px]"
                  >
                    Copy
                  </a>
                </div>
              </div>
              <div className="mx-auto mb-16 space-y-5 lg:pt-4">
                <Button
                  color="gray"
                  handler={() => alert(123)}
                  iconName="copy"
                  iconPosition="left"
                >
                  Share Link
                </Button>

                <Button
                  color="blue"
                  handler={() => alert(123)}
                  className="!rounded-none"
                >
                  Invite From Contacts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferFriendHomeView;

import TextArea from "@/components/Forms/TextArea";
import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
const PickupNoteView = () => {
  return (
    <>
      {/* <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute flex items-center px-5 mb-12 top-7">
                <a href="">
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={36} height={36} rx={4} fill="#FFFEFD" />
                    <path
                      d="M25 17.0003H13.14L16.77 12.6403C16.9397 12.4361 17.0214 12.1728 16.997 11.9084C16.9726 11.6439 16.8442 11.4 16.64 11.2303C16.4358 11.0605 16.1725 10.9789 15.9081 11.0033C15.6436 11.0276 15.3997 11.1561 15.23 11.3603L10.23 17.3603C10.1964 17.408 10.1663 17.4581 10.14 17.5103C10.14 17.5603 10.14 17.5903 10.07 17.6403C10.0247 17.7549 10.0009 17.877 10 18.0003C10.0009 18.1236 10.0247 18.2456 10.07 18.3603C10.07 18.4103 10.07 18.4403 10.14 18.4903C10.1663 18.5424 10.1964 18.5926 10.23 18.6403L15.23 24.6403C15.324 24.7532 15.4418 24.8439 15.5748 24.9062C15.7079 24.9684 15.8531 25.0005 16 25.0003C16.2337 25.0007 16.4601 24.9194 16.64 24.7703C16.7413 24.6863 16.825 24.5832 16.8863 24.4669C16.9477 24.3505 16.9855 24.2232 16.9975 24.0922C17.0096 23.9613 16.9957 23.8292 16.9567 23.7036C16.9176 23.578 16.8542 23.4613 16.77 23.3603L13.14 19.0003H25C25.2652 19.0003 25.5196 18.8949 25.7071 18.7074C25.8946 18.5198 26 18.2655 26 18.0003C26 17.7351 25.8946 17.4807 25.7071 17.2932C25.5196 17.1056 25.2652 17.0003 25 17.0003Z"
                      fill="#29225E"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full">
                <img
                  className="w-full dark:hidden"
                  src="./assets/images/icons/Group 199.jpg"
                  alt=""
                />
                <img
                  className="hidden w-full dark:block"
                  src="./assets/images/icons/Group 199_dark.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="px-5 pt-5 pb-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Leave a pickup note
                    </h2>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="dark:fill-white"
                        d="M5.79704 5.79704C5.88294 5.71093 5.98498 5.64261 6.09731 5.596C6.20965 5.54938 6.33008 5.52539 6.45171 5.52539C6.57333 5.52539 6.69376 5.54938 6.8061 5.596C6.91844 5.64261 7.02047 5.71093 7.10637 5.79704L11.9997 10.6922L16.893 5.79704C16.979 5.71107 17.081 5.64288 17.1934 5.59635C17.3057 5.54982 17.4261 5.52587 17.5477 5.52587C17.6692 5.52587 17.7896 5.54982 17.902 5.59635C18.0143 5.64288 18.1164 5.71107 18.2023 5.79704C18.2883 5.88302 18.3565 5.98508 18.403 6.09741C18.4495 6.20973 18.4735 6.33012 18.4735 6.45171C18.4735 6.57329 18.4495 6.69368 18.403 6.80601C18.3565 6.91833 18.2883 7.0204 18.2023 7.10637L13.3072 11.9997L18.2023 16.893C18.2883 16.979 18.3565 17.081 18.403 17.1934C18.4495 17.3057 18.4735 17.4261 18.4735 17.5477C18.4735 17.6692 18.4495 17.7896 18.403 17.902C18.3565 18.0143 18.2883 18.1164 18.2023 18.2023C18.1164 18.2883 18.0143 18.3565 17.902 18.403C17.7896 18.4495 17.6692 18.4735 17.5477 18.4735C17.4261 18.4735 17.3057 18.4495 17.1934 18.403C17.081 18.3565 16.979 18.2883 16.893 18.2023L11.9997 13.3072L7.10637 18.2023C7.0204 18.2883 6.91833 18.3565 6.80601 18.403C6.69368 18.4495 6.57329 18.4735 6.45171 18.4735C6.33012 18.4735 6.20973 18.4495 6.09741 18.403C5.98508 18.3565 5.88302 18.2883 5.79704 18.2023C5.71107 18.1164 5.64288 18.0143 5.59635 17.902C5.54982 17.7896 5.52587 17.6692 5.52587 17.5477C5.52587 17.4261 5.54982 17.3057 5.59635 17.1934C5.64288 17.081 5.71107 16.979 5.79704 16.893L10.6922 11.9997L5.79704 7.10637C5.71093 7.02047 5.64261 6.91844 5.596 6.8061C5.54938 6.69376 5.52539 6.57333 5.52539 6.45171C5.52539 6.33008 5.54938 6.20965 5.596 6.09731C5.64261 5.98498 5.71093 5.88294 5.79704 5.79704Z"
                        fill="#1A1A1A"
                      />
                    </svg>
                  </div>
                  <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    Want to inform any additional information to the driver as
                    he pickups you up for your ride?
                  </p>
                </div>
                <div className="mx-5 h-[156px] rounded bg-gray-1 p-5 dark:bg-[#2C2C35]">
                  <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    Write a pickup note....
                  </p>
                </div>
              </div>
              <div className="p-5">
                <button
                  onclick="location.href=''"
                  className="rounded-5 shadow-one dark:shadow-dark mx-auto flex w-full items-center justify-center rounded-md
                  border-2 border-transparent bg-primary-500 px-4 py-4  text-base font-semibold text-white hover:bg-primary-hover hover:text-white
                    focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 
                    lg:bottom-[22px] 2xs:bottom-[8px]"
                >
                  Leave pickup note
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/rider_accept">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="mb-6 px-5 pt-5 pb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Leave a pickup note
                    </h2>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="dark:fill-white"
                        d="M5.79704 5.79704C5.88294 5.71093 5.98498 5.64261 6.09731 5.596C6.20965 5.54938 6.33008 5.52539 6.45171 5.52539C6.57333 5.52539 6.69376 5.54938 6.8061 5.596C6.91844 5.64261 7.02047 5.71093 7.10637 5.79704L11.9997 10.6922L16.893 5.79704C16.979 5.71107 17.081 5.64288 17.1934 5.59635C17.3057 5.54982 17.4261 5.52587 17.5477 5.52587C17.6692 5.52587 17.7896 5.54982 17.902 5.59635C18.0143 5.64288 18.1164 5.71107 18.2023 5.79704C18.2883 5.88302 18.3565 5.98508 18.403 6.09741C18.4495 6.20973 18.4735 6.33012 18.4735 6.45171C18.4735 6.57329 18.4495 6.69368 18.403 6.80601C18.3565 6.91833 18.2883 7.0204 18.2023 7.10637L13.3072 11.9997L18.2023 16.893C18.2883 16.979 18.3565 17.081 18.403 17.1934C18.4495 17.3057 18.4735 17.4261 18.4735 17.5477C18.4735 17.6692 18.4495 17.7896 18.403 17.902C18.3565 18.0143 18.2883 18.1164 18.2023 18.2023C18.1164 18.2883 18.0143 18.3565 17.902 18.403C17.7896 18.4495 17.6692 18.4735 17.5477 18.4735C17.4261 18.4735 17.3057 18.4495 17.1934 18.403C17.081 18.3565 16.979 18.2883 16.893 18.2023L11.9997 13.3072L7.10637 18.2023C7.0204 18.2883 6.91833 18.3565 6.80601 18.403C6.69368 18.4495 6.57329 18.4735 6.45171 18.4735C6.33012 18.4735 6.20973 18.4495 6.09741 18.403C5.98508 18.3565 5.88302 18.2883 5.79704 18.2023C5.71107 18.1164 5.64288 18.0143 5.59635 17.902C5.54982 17.7896 5.52587 17.6692 5.52587 17.5477C5.52587 17.4261 5.54982 17.3057 5.59635 17.1934C5.64288 17.081 5.71107 16.979 5.79704 16.893L10.6922 11.9997L5.79704 7.10637C5.71093 7.02047 5.64261 6.91844 5.596 6.8061C5.54938 6.69376 5.52539 6.57333 5.52539 6.45171C5.52539 6.33008 5.54938 6.20965 5.596 6.09731C5.64261 5.98498 5.71093 5.88294 5.79704 5.79704Z"
                        fill="#1A1A1A"
                      />
                    </svg>
                  </div>
                  <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    Want to inform any additional information to the driver as
                    he pickups you up for your ride?
                  </p>
                </div>
                <div className="px-5">
                  <TextArea placeholder="Write a pickup note...." />
                </div>
              </div>
              <div className="mx-auto mt-2 mb-16 space-y-4 px-5 lg:pt-6 2xs:mt-5">
                <Button color="blue">Leave pickup note</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupNoteView;

import TextArea from "@/components/Forms/TextArea";
import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const PickupNoteView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/rider_accept">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="mb-6 px-5 pb-6 pt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Leave a pickup note
                    </h2>
                    <svg
                      onClick={() => Router.back()}
                      className="cursor-pointer"
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
              <div className="mx-auto mb-16 mt-2 space-y-4 px-5 lg:pt-6 2xs:mt-5">
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

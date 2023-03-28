import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import Router from "next/router";
export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:mb-[30px] 2xl:h-[460px] 3xl:h-[700px]">
              <div className="pickup_header  mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/driver_feedback">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  I want to change the ratings for my driver.
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  What rating would you like to give?
                </p>
              </div>
              {/* radion button List  */}
              <div className="radio_wrapper">
                <div className="list mb-6 flex items-center justify-between">
                  {/* Star icon */}
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    <svg
                      className="inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {/* Radio button */}
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary-500 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 dark:fill-white"
                        viewBox="0 0 16 16"
                        fill="#29225E"
                      >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  {/* Star icon */}
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    <svg
                      className="inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {/* Radio button */}
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 dark:fill-white"
                        viewBox="0 0 16 16"
                        fill="#29225E"
                      >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  {/* Star icon */}
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    <svg
                      className="inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {/* Radio button */}
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 dark:fill-white"
                        viewBox="0 0 16 16"
                        fill="#29225E"
                      >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  {/* Star icon */}
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    <svg
                      className="inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {/* Radio button */}
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 dark:fill-white"
                        viewBox="0 0 16 16"
                        fill="#29225E"
                      >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  {/* Star icon */}
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    <svg
                      className="inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="ml-2 inline-block"
                      width={26}
                      height={26}
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8019 4.17286L9.08269 3.63233L7.42009 0.261724C7.37468 0.169439 7.29998 0.094732 7.20769 0.0493218C6.97625 -0.064936 6.695 0.0302789 6.57927 0.261724L4.91668 3.63233L1.19744 4.17286C1.0949 4.18751 1.00115 4.23585 0.929372 4.30909C0.842597 4.39828 0.79478 4.51827 0.796428 4.64269C0.798076 4.76712 0.849054 4.8858 0.938161 4.97266L3.62908 7.5962L2.99334 11.3008C2.97843 11.387 2.98796 11.4756 3.02086 11.5566C3.05376 11.6377 3.10871 11.7079 3.17947 11.7592C3.25023 11.8106 3.33398 11.8412 3.42122 11.8474C3.50845 11.8536 3.59569 11.8353 3.67302 11.7944L6.99968 10.0454L10.3263 11.7944C10.4172 11.8428 10.5226 11.8589 10.6237 11.8413C10.8786 11.7974 11.05 11.5557 11.006 11.3008L10.3703 7.5962L13.0612 4.97266C13.1344 4.90088 13.1828 4.80713 13.1974 4.7046C13.237 4.44825 13.0583 4.21094 12.8019 4.17286Z"
                        fill="url(#paint0_linear_4544_2922)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4544_2922"
                          x1="6.99965"
                          y1="0.000976562"
                          x2="6.99965"
                          y2="11.8486"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {/* Radio button */}
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 dark:fill-white"
                        viewBox="0 0 16 16"
                        fill="#29225E"
                      >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <button
              onclick="location.href='./reservation_confirm.html'"
              className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              Submit Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const BusinessProfileView = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-white dark:bg-dark-bg lg:mt-6 2xs:block 2xs:h-full 2xs:w-full">
        <div className="lg:darkpy-4 smorder 2xs:da-0rlgorder-0 sm:dk2x:order-0 b rounded-2xl py-4">
          <div className="h-full w-[428px] overflow-y-auto overflow-x-hidden dark:bg-dark-bg sm:pb-3 xl:h-[600px] 2xl:h-[490px]  3xl:h-full  2xs:w-auto 2xs:pb-10">
            <div className="mt-7">
              <img
                className="mx-auto dark:hidden dark:opacity-0"
                src="./assets/images/wallet/Frame 1148.png"
                alt="img"
              />
              <img
                className="mx-auto hidden rounded-3xl opacity-0 dark:block dark:opacity-100"
                src="./assets/images/wallet/Frame 1148 (1).png"
                alt="img"
              />
            </div>
            <div className="relative sm:px-5 sm:pt-[120px] sm:text-left lg:pt-0 2xs:px-5 2xs:pt-0 2xs:text-left">
              <h1 className="mt-3 mb-5 text-32 font-extrabold text-black dark:text-gray-2 2xs:mb-8 2xs:mt-0 2xs:text-26">
                Set Business Profile
              </h1>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={20} cy={20} r={20} fill="#F9F7FC" />
                    <path
                      d="M20 10C19.0111 10 18.0444 10.2932 17.2221 10.8427C16.3999 11.3921 15.759 12.173 15.3806 13.0866C15.0022 14.0002 14.9031 15.0055 15.0961 15.9755C15.289 16.9454 15.7652 17.8363 16.4645 18.5355C17.1637 19.2348 18.0546 19.711 19.0245 19.9039C19.9945 20.0969 20.9998 19.9978 21.9134 19.6194C22.827 19.241 23.6079 18.6001 24.1573 17.7779C24.7068 16.9556 25 15.9889 25 15C25 13.6739 24.4732 12.4021 23.5355 11.4645C22.5979 10.5268 21.3261 10 20 10ZM20 18C19.4067 18 18.8266 17.8241 18.3333 17.4944C17.8399 17.1648 17.4554 16.6962 17.2284 16.1481C17.0013 15.5999 16.9419 14.9967 17.0576 14.4147C17.1734 13.8328 17.4591 13.2982 17.8787 12.8787C18.2982 12.4591 18.8328 12.1734 19.4147 12.0576C19.9967 11.9419 20.5999 12.0013 21.1481 12.2284C21.6962 12.4554 22.1648 12.8399 22.4944 13.3333C22.8241 13.8266 23 14.4067 23 15C23 15.7956 22.6839 16.5587 22.1213 17.1213C21.5587 17.6839 20.7956 18 20 18ZM29 29V28C29 26.1435 28.2625 24.363 26.9497 23.0503C25.637 21.7375 23.8565 21 22 21H18C16.1435 21 14.363 21.7375 13.0503 23.0503C11.7375 24.363 11 26.1435 11 28V29H13V28C13 26.6739 13.5268 25.4021 14.4645 24.4645C15.4021 23.5268 16.6739 23 18 23H22C23.3261 23 24.5979 23.5268 25.5355 24.4645C26.4732 25.4021 27 26.6739 27 28V29H29Z"
                      fill="#633CAE"
                      stroke="#633CAE"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create individual account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Get receipts email to a work inbox, keep work trips
                    separate, and more...
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <svg
                    width={40}
                    height={41}
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={20} cy="20.5" r={20} fill="#FCF3F7" />
                    <path
                      d="M20 12.1666C19.1759 12.1666 18.3703 12.411 17.6851 12.8688C16.9999 13.3267 16.4659 13.9774 16.1505 14.7388C15.8351 15.5001 15.7526 16.3379 15.9134 17.1462C16.0742 17.9544 16.471 18.6969 17.0537 19.2796C17.6364 19.8623 18.3789 20.2591 19.1871 20.4199C19.9954 20.5807 20.8332 20.4982 21.5945 20.1828C22.3559 19.8674 23.0066 19.3334 23.4645 18.6482C23.9223 17.963 24.1667 17.1574 24.1667 16.3333C24.1667 15.2282 23.7277 14.1684 22.9463 13.387C22.1649 12.6056 21.1051 12.1666 20 12.1666ZM20 18.8333C19.5055 18.8333 19.0222 18.6867 18.6111 18.412C18.2 18.1373 17.8795 17.7468 17.6903 17.29C17.5011 16.8332 17.4516 16.3305 17.548 15.8456C17.6445 15.3606 17.8826 14.9152 18.2322 14.5655C18.5819 14.2159 19.0273 13.9778 19.5123 13.8813C19.9972 13.7849 20.4999 13.8344 20.9567 14.0236C21.4135 14.2128 21.804 14.5332 22.0787 14.9444C22.3534 15.3555 22.5 15.8388 22.5 16.3333C22.5 16.9963 22.2366 17.6322 21.7678 18.1011C21.2989 18.5699 20.663 18.8333 20 18.8333ZM27.5 28V27.1666C27.5 25.6195 26.8854 24.1358 25.7915 23.0418C24.6975 21.9479 23.2138 21.3333 21.6667 21.3333H18.3333C16.7862 21.3333 15.3025 21.9479 14.2085 23.0418C13.1146 24.1358 12.5 25.6195 12.5 27.1666V28H14.1667V27.1666C14.1667 26.0616 14.6057 25.0017 15.3871 24.2203C16.1685 23.4389 17.2283 23 18.3333 23H21.6667C22.7717 23 23.8315 23.4389 24.6129 24.2203C25.3943 25.0017 25.8333 26.0616 25.8333 27.1666V28H27.5Z"
                      fill="#BB3069"
                    />
                    <path
                      d="M28.9584 21.125H26.0417C25.876 21.125 25.717 21.0592 25.5998 20.9419C25.4826 20.8247 25.4167 20.6658 25.4167 20.5C25.4167 20.3342 25.4826 20.1753 25.5998 20.0581C25.717 19.9408 25.876 19.875 26.0417 19.875H28.9584C29.1242 19.875 29.2831 19.9408 29.4004 20.0581C29.5176 20.1753 29.5834 20.3342 29.5834 20.5C29.5834 20.6658 29.5176 20.8247 29.4004 20.9419C29.2831 21.0592 29.1242 21.125 28.9584 21.125Z"
                      fill="#BB3069"
                    />
                    <path
                      d="M28.125 19.0417L28.125 21.9584C28.125 22.1241 28.0592 22.2831 27.9419 22.4003C27.8247 22.5175 27.6658 22.5834 27.5 22.5834C27.3342 22.5834 27.1753 22.5175 27.0581 22.4003C26.9408 22.2831 26.875 22.1241 26.875 21.9584L26.875 19.0417C26.875 18.8759 26.9408 18.717 27.0581 18.5998C27.1753 18.4826 27.3342 18.4167 27.5 18.4167C27.6658 18.4167 27.8247 18.4826 27.9419 18.5998C28.0592 18.717 28.125 18.8759 28.125 19.0417Z"
                      fill="#BB3069"
                    />
                  </svg>
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create a team account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Track your overall team expenses easily by adding your
                    colleagues
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <svg
                    width={40}
                    height={41}
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={20} cy="20.5" r={20} fill="#F4FAF6" />
                    <path
                      d="M18 19H15.101L15.102 18.991C15.2326 18.3516 15.4881 17.7443 15.854 17.204C16.3985 16.4018 17.1621 15.7731 18.054 15.393C18.356 15.265 18.671 15.167 18.992 15.102C19.6579 14.967 20.3441 14.967 21.01 15.102C21.967 15.2981 22.8451 15.7714 23.535 16.463L24.951 15.051C24.3128 14.4126 23.5578 13.903 22.727 13.55C22.3033 13.3706 21.8628 13.2339 21.412 13.142C20.4818 12.953 19.5232 12.953 18.593 13.142C18.1419 13.2343 17.701 13.3713 17.277 13.551C16.0275 14.0811 14.9579 14.9611 14.197 16.085C13.6849 16.8428 13.3268 17.694 13.143 18.59C13.115 18.725 13.1 18.863 13.08 19H10L14 23L18 19ZM22 21H24.899L24.898 21.008C24.6367 22.2897 23.8812 23.4171 22.795 24.146C22.2548 24.5122 21.6475 24.7677 21.008 24.898C20.3424 25.033 19.6566 25.033 18.991 24.898C18.3516 24.7674 17.7443 24.5119 17.204 24.146C16.9386 23.9665 16.6908 23.7622 16.464 23.536L15.05 24.95C15.6885 25.5882 16.4439 26.0974 17.275 26.45C17.699 26.63 18.142 26.767 18.59 26.858C19.5198 27.0471 20.4782 27.0471 21.408 26.858C23.2005 26.4859 24.7773 25.4294 25.803 23.913C26.3146 23.1557 26.6724 22.3053 26.856 21.41C26.883 21.275 26.899 21.137 26.919 21H30L26 17L22 21Z"
                      fill="#4DAA6C"
                    />
                  </svg>
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Join an existing organization
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Link your account to a business and start expending eligible
                    rides
                  </p>
                </div>
              </div>
              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <button
                  onclick="location.href='./business_profile_email.html'"
                  className="rounded-5 shadow-one dark:shadow-dark mb-4 w-full rounded-md border-2 border-transparent bg-primary-500 px-6 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500"
                >
                  Set Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProfileView;

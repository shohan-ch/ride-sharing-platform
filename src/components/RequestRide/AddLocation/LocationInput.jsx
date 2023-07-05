const icons = {
  remove: (
    <svg
      width={30}
      height={30}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_829_12198)">
        <path
          d="M10.0002 18.3327C14.6026 18.3327 18.3335 14.6017 18.3335 9.99935C18.3335 5.39698 14.6026 1.66602 10.0002 1.66602C5.39783 1.66602 1.66687 5.39698 1.66687 9.99935C1.66687 14.6017 5.39783 18.3327 10.0002 18.3327Z"
          fill="#EC1D1D"
          stroke="#FFFEFD"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 7.5L7.5 12.5"
          stroke="#FFFEFD"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5L12.5 12.5"
          stroke="#FFFEFD"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_829_12198">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  add: (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={16} cy={16} r="15.5" fill="#F8F8F8" stroke="#FFFEFD" />
      <path
        d="M19.4939 8.49902C22.0439 8.49902 23.4989 9.93902 23.4989 12.4965V19.5015C23.4989 22.044 22.0514 23.499 19.5014 23.499H12.4964C9.9389 23.499 8.4989 22.044 8.4989 19.5015V12.4965C8.4989 9.93902 9.9389 8.49902 12.4964 8.49902H19.4939ZM15.9914 12.6315C15.6464 12.6315 15.3689 12.909 15.3689 13.254V15.369H13.2464C13.0814 15.369 12.9239 15.4365 12.8039 15.549C12.6914 15.669 12.6239 15.8258 12.6239 15.9915C12.6239 16.3365 12.9014 16.614 13.2464 16.6215H15.3689V18.744C15.3689 19.089 15.6464 19.3665 15.9914 19.3665C16.3364 19.3665 16.6139 19.089 16.6139 18.744V16.6215H18.7439C19.0889 16.614 19.3664 16.3365 19.3664 15.9915C19.3664 15.6465 19.0889 15.369 18.7439 15.369H16.6139V13.254C16.6139 12.909 16.3364 12.6315 15.9914 12.6315Z"
        fill="#29225E"
      />
    </svg>
  ),
  dot: (
    <svg
      width={4}
      height={5}
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className=" dark:fill-white"
        cx={2}
        cy="2.5"
        r={2}
        fill="#1A1A1A"
      />
    </svg>
  ),
  menu: (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="dark:stroke-white"
        d="M1.5 6H10.5"
        stroke="#29225E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="dark:stroke-white"
        d="M1.5 3H10.5"
        stroke="#29225E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="dark:stroke-white"
        d="M1.5 9H10.5"
        stroke="#29225E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const LocationInput = ({ ChangleHandler, buttonHandler, icon }) => {
  return (
    <>
      <div className="relative mx-auto mb-[15px] flex items-center justify-between gap-4 focus:ring focus:ring-gray-1 focus:ring-offset-4">
        <div className="w-full">
          <div className="relative mx-auto focus:ring focus:ring-gray-1 focus:ring-offset-4">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-4">
              {icons["dot"]}
            </div>
            <input
              onChange={ChangleHandler}
              autofocus=""
              type="text"
              id="simple-search"
              className="h-[50px] w-full rounded  px-10 pl-10 text-[16px] text-[#1A1A1A] focus:outline-none focus:ring focus:ring-[#29225E] focus:ring-offset-4 dark:bg-[#202028] dark:text-gray-1 md:text-[18px]"
              placeholder="Add a stop"
              required=""
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-5">
              {icons["menu"]}
            </div>
          </div>
        </div>
        <div>
          {/* Button handler */}
          <button onClick={buttonHandler}>
            {" "}
            {icons[icon] || icons["remove"]}
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationInput;

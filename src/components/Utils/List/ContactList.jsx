const ContactList = ({ contacts }) => {
  const list = contacts.map((contact, index) => (
    <div
      key={index}
      className={` border-[#F6F6F6] bg-bg-color dark:border-[#2C2C35] dark:bg-dark-2 ${
        contact.status && "flex items-center justify-between !bg-[#FCF3F7]"
      }`}
    >
      <div className="py-3 pl-5">
        <h1 className="mb-1 text-[12px] font-bold text-[#1A1A1A] dark:text-white md:text-[16px]">
          {contact.name}
          {/* Albert Flores */}
        </h1>
        <ul className="flex items-center text-[12px] text-gray-light dark:text-gray-2 md:text-[14px]">
          <li>{contact.mobile}</li>
          <li className="ml-7 list-disc">{contact.type || "mobile"} </li>
        </ul>
      </div>
      <div>
        {contact.status && (
          <svg
            className="mr-[27px]"
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1358_19526)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5H0ZM7.54347 11.924L12.1493 6.16613L11.3173 5.50053L7.38987 10.4083L4.608 8.0904L3.92533 8.9096L7.54347 11.9251V11.924Z"
                fill="#BB3069"
              />
            </g>
            <defs>
              <clipPath id="clip0_1358_19526">
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  ));

  return <>{list}</>;
};

export default ContactList;

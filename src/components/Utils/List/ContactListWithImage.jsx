const ContactListWithImage = ({ contacts, handleClick }) => {
  const list = contacts.map((contact, index) => (
    <div
      onClick={() => handleClick(index)}
      key={index}
      className="mb-8 flex items-center border-b-[1px] border-[#F6F6F6] pb-5 dark:border-[#2C2C35]"
    >
      <img src={"/assets/images/help/contacts/" + contact.image} alt="" />
      <div className="ml-4 flex w-full items-center justify-between md:ml-6">
        <div>
          <h1 className="mb-[2px]  text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
            {contact.name}
          </h1>
          <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
            {contact.mobile}
          </p>
          <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
            {contact.email}
          </p>
        </div>
        <div className="mr-[6px] md:mr-3">
          <svg
            className="md:h-4 md:w-2"
            width={6}
            height={11}
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:stroke-gray-2"
              d="M1 9.5L5 5.5L1 1.5"
              stroke="#1A1A1A"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  ));

  return <>{list}</>;
};

export default ContactListWithImage;

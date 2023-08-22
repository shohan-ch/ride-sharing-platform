const svgIcons = {
  searchHelp: (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
        fill="#29225E"
        className="dark:fill-gray-2"
      />
    </svg>
  ),
  messengerGray: (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22366 1.05281C2.13996 1.01095 2.04619 0.993419 1.95302 1.00221C1.85985 1.01101 1.77102 1.04577 1.69663 1.10255C1.62224 1.15934 1.56528 1.23586 1.53222 1.32341C1.49917 1.41096 1.49135 1.50604 1.50966 1.59781L2.91266 6.44781C2.93882 6.5382 2.98995 6.61936 3.06018 6.68198C3.13041 6.74461 3.21688 6.78614 3.30966 6.80181L8.99966 7.75481C9.26766 7.80781 9.26766 8.19181 8.99966 8.24481L3.30966 9.19781C3.21688 9.21349 3.13041 9.25502 3.06018 9.31764C2.98995 9.38026 2.93882 9.46143 2.91266 9.55181L1.50966 14.4018C1.49135 14.4936 1.49917 14.5887 1.53222 14.6762C1.56528 14.7638 1.62224 14.8403 1.69663 14.8971C1.77102 14.9539 1.85985 14.9886 1.95302 14.9974C2.04619 15.0062 2.13996 14.9887 2.22366 14.9468L15.2237 8.44681C15.3066 8.40524 15.3763 8.34142 15.4251 8.26248C15.4738 8.18353 15.4996 8.09259 15.4996 7.99981C15.4996 7.90704 15.4738 7.81609 15.4251 7.73715C15.3763 7.65821 15.3066 7.59438 15.2237 7.55281L2.22366 1.05281Z"
        fill="#5C5C5C"
      />
    </svg>
  ),
  dot: (
    <svg
      className="ml-3"
      width={5}
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
  location: (
    <svg
      width={30}
      height={30}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z"
        fill="#29225E"
      />
    </svg>
  ),

  location2: (
    <svg
      width={30}
      height={30}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z"
        fill="#BB3069"
      />
    </svg>
  ),

  clock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="currentColor"
      className="bi bi-compass-fill fill-primary-500 dark:fill-white"
      viewBox="0 0 16 16"
    >
      <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
    </svg>
  ),
  coloseIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="currentColor"
      className="bi bi-x-circle-fill fill-red-700 dark:fill-white dark:stroke-red-500"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
    </svg>
  ),
};

const InputFieldWithIcon = (props) => {
  const {
    innerRef,
    leftIconName,
    rightIconName,
    type,
    placeholder,
    value,
    handeleInputChange,
    handeleClick,
    className,
  } = props;

  // console.log(leftIconName);
  return (
    <>
      <div className="relative h-auto w-full sm:mb-8 lg:mb-2 2xs:mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
          {svgIcons[leftIconName]}
        </div>
        <input
          ref={innerRef}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handeleClick || handeleInputChange}
          onClick={handeleClick}
          className={`${className} h-[54px] w-full rounded-md bg-[#FCF3F7] p-2 pl-10 placeholder:font-semibold 
          focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-2
           focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white
            dark:placeholder-gray-400 dark:placeholder:text-white/60 dark:focus:border-black dark:focus:outline-1
             dark:focus:ring-black`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-1">
          {svgIcons[rightIconName]}
        </div>
      </div>
    </>
  );
};

export default InputFieldWithIcon;

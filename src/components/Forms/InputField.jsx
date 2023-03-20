export default (props) => {
  const {
    label,
    type,
    placeholder,
    value,
    name,
    handeleInputChange,
    className,
  } = props;

  return (
    <>
      <label
        htmlFor="firstName"
        className="mb-5 text-base font-medium text-gray-light 2xs:hidden"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        className={`${className} mt-3 h-[48px] w-full rounded-md border bg-gray-1 p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-1 dark:focus:ring-black`}
        placeholder={placeholder}
        onChange={handeleInputChange}
      />
    </>
  );
};

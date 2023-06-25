export default (props) => {
  const { children, handler, isActive } = props;
  return (
    <>
      <span
        onClick={handler}
        className={` ${
          isActive ? "bg-primary-500 text-white " : "bg-gray-2 text-black"
        }mb-3 inline-flex h-[35px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full  px-5 text-[14px] font-normal`}
      >
        {children}
      </span>
    </>
  );
};

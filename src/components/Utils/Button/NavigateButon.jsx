export default (props) => {
  const { children } = props;
  return (
    <>
      <span className=" mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-2 bg-primary-500 px-5 text-[14px] font-medium text-white">
        {children}
      </span>
    </>
  );
};

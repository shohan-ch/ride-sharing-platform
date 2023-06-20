const LayoutOnlyHeader = ({ children }) => {
  return (
    <>
      <nav className="hidden bg-primary-500 px-20 py-4 pl-20 lg:block">
        <div className="flex flex-shrink-0 items-center text-26 text-white">
          Get<span className="font-semibold tracking-tight">Ryd</span>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};
export default LayoutOnlyHeader;

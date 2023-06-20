import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./SIdeBar/Sidebar";

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const drawerHandle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header drawerHandle={drawerHandle} />
      <Sidebar isDrawerOpen={isDrawerOpen} />
      <main className="dark:bg-dark-bg">{children}</main>
    </>
  );
};
export default Layout;

import Login from "./login";
import { useRouter } from "next/router";
import Otp from "./otp";
import LoginwithPassword from "./loginwithPassword";
import RiderForm from "./riderForm";

const Auth = ({ page }) => {
  // const router =  useRouter();
  if (page == "login") {
    return <Login />;
  } else if (page == "otp") {
    return <Otp />;
  } else if (page == "loginwithPassword") {
    return <LoginwithPassword />;
  } else if (page == "riderForm") {
    return <RiderForm />;
  } else {
    // Router.push('/404');
    return <h1>Page not found</h1>;
  }
};

export const getServerSideProps = async ({ params }) => {
  const { auth } = params;
  return {
    props: { page: auth },
  };
};

export default Auth;

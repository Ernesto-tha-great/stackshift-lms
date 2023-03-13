import { FC, ReactNode, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      <div className="bg-gray-100; overflow-hidden flex flex-col min-h-screen">
        <Header
          currRoute={authenticated ? "/pathways" : "#"}
          route={authenticated ? "/Home" : "#"}
        />
        <div className="py-16 max-w-7xl w-full mx-auto space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

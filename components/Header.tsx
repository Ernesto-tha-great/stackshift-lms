// import { useUser } from "@/context/userContext";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Auth } from "aws-amplify";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const [userAuth, setUserAuth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userAuthenticated = () => {
      Auth.currentAuthenticatedUser({
        bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
        .then((user) => {
          setUserAuth(user);
        })
        .catch((err) => console.log(err));
    };
    userAuthenticated();
  }, []);

  const handleRoute = () => {
    if (userAuth !== null) {
      router.push("/Home");
    } else {
      router.push("/signup");
    }
  };

  return (
    <Disclosure as="nav" className="bg-light">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href={userAuth ? "/Home" : "/"}
                  className="flex flex-shrink-0 items-center"
                >
                  <Image
                    className="block h-8 w-auto sm:block lg:block mr-8"
                    src="/logo.svg"
                    width="24"
                    height="24"
                    alt="Celo Logo"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href={userAuth ? "/pathways" : "/"}
                    className="inline-flex items-center border-b-[3px] border-black px-1 pt-1 text-base font-noto text-bold text-black"
                  >
                    Curriculum
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex-row ">
                <ConnectButton
                  showBalance={{ smallScreen: true, largeScreen: false }}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
              >
                Home
              </Disclosure.Button>
              {/* Add here your custom menu elements */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

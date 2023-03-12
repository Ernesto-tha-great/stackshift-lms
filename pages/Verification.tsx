/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import InputField from "@/components/common/input";
import Loading from "@/components/common/Loading";
import { DataStore } from "@aws-amplify/datastore";
import { Auth } from "aws-amplify";
import { User } from "@/src/models";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Verification() {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  const { address, isDisconnected } = useAccount();

  const verify = async () => {
    setLoading(true);
    try {
      if (verificationCode === "") {
        alert("Please fill all the fields");
        return;
      }

      try {
        console.log("newhhh", router.query.email?.toString());
        console.log("newhhh", verificationCode);
        await Auth.confirmSignUp(
          router.query.email!.toString(),
          verificationCode
        );
        console.log("newhhh", "success");
        await DataStore.save(
          new User({
            email: router.query.email?.toString(),
            name: router.query.name?.toString(),
            country: router.query.country?.toString(),
            address: router.query.address?.toString(),
          })
        );
        console.log("newhhh", "success2");
        router.push({
          pathname: "/Login",
          query: {
            email: router.query.email,
            name: router.query.name,
            country: router.query.country,
            address: router.query.address,
          },
        });
      } catch (err: any) {
        console.log("Error: ", err);
      }
    } finally {
      setLoading(false);
    }
  };

  if (isDisconnected) {
    return (
      <section>
        <div className="w-full flex mt-16 flex-row items-center ">
          <div className="w-1/2 bg-gypsum border-2 border-black px-8 rounded-xl py-16 mx-8">
            <div className="text-2xl font-noto font-semibold text-center">
              Please connect your wallet to continue
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Celo Academy | Signup</title>
        <meta
          name="description"
          content="Celo Academy signup page"
          key="desc"
        />
      </Head>
      <section>
        <div className="w-full flex mt-16 flex-row items-center ">
          <div className="w-1/2 bg-gypsum border-2 border-black px-8 rounded-xl py-16 mx-8">
            <div className="text-2xl font-noto font-semibold text-center">
              Verify your email
            </div>
            {/* <h5 className="mt-8 font-noto"></h5> */}
            <div className="mt-6">
              <label htmlFor="verificationCode" className="sr-only">
                Verification Code
              </label>
              <input
                id="verificationCode"
                name="verificationCode"
                type="text"
                autoComplete="off"
                required
                maxLength={6}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Verification Code | check your mail"
              />
            </div>

            <div className="mt-8 h-16">
              {loading ? (
                <Loading />
              ) : (
                <button
                  onClick={() => {
                    verify();
                  }}
                  className="w-full button-full hover:cursor-pointer"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" />
          </div>
        </div>
      </section>
    </>
  );
}

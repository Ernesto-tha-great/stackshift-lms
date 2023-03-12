/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import InputField from "@/components/common/input";
import Loading from "@/components/common/Loading";
import { DataStore } from "@aws-amplify/datastore";
import { Auth } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { address, isDisconnected } = useAccount();

  const login = async () => {
    setLoading(true);
    try {
      if (username === "" || password === "") {
        alert("Please fill all the fields");
        return;
      }

      try {
        await Auth.signIn(username, password);

        const currentUser = await Auth.currentUserInfo();
        console.log(currentUser);
        router.push("/Home");
      } catch (err: any) {
        alert(err);
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
              Log In
            </div>
            {/* <h5 className="mt-8 font-noto"></h5> */}

            <div className="mt-4">
              <InputField
                value={username}
                placeholder={"username (email)"}
                onChange={(e) => setUsername(e)}
              />
            </div>

            <div className="mt-4">
              <InputField
                value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e)}
              />
            </div>
            <div className="mt-8 h-16">
              {loading ? (
                <Loading />
              ) : (
                <button
                  onClick={() => {
                    login();
                  }}
                  className="w-full button-full hover:cursor-pointer"
                >
                  Log In
                </button>
              )}
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <h3 className="text-xl font-medium">
                If you dont have an account{" "}
              </h3>
              <button
                className="button-signup"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>
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

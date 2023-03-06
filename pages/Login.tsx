/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import InputField from "@/components/common/input";
import Loading from "@/components/common/Loading";
import { User } from "@/src/models";
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
        await DataStore.save(
          new User({
            email: username,
            name: router.query.name?.toString(),
            country: router.query.country?.toString(),
            address: router.query.address?.toString(),
          })
        );
        router.push("/Home");
      } catch (err: any) {
        if (err.code === "UserNotConfirmedException") {
          router.push("/Signup");
        } else if (err.code === "NotAuthorizedException") {
          router.push("/Signup");
        } else if (err.code === "UserNotFoundException") {
          router.push("/Signup");
        } else {
          console.log(err);
        }
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
          </div>
          <div className="w-1/2">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" />
          </div>
        </div>
      </section>
    </>
  );
}

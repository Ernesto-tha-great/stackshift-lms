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

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  const { address, isDisconnected } = useAccount();

  // const { user, setUser } = useUser();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const signup = async () => {
    setLoading(true);
    try {
      if (email === "" || name === "" || country === "" || password === "") {
        alert("Please fill all the fields");
        return;
      }

      try {
        const { user } = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            email: email,
          },
          autoSignIn: {
            enabled: true,
          },
        });
        console.log(user);
        router.push({
          pathname: "/Verification",
          query: {
            email: email,
            name: name,
            country: country,
            address: address,
          },
        });
      } catch (error) {
        alert(error);
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
              Sign up
            </div>
            {/* <h5 className="mt-8 font-noto"></h5> */}
            <div className="mt-3">
              <InputField
                value={email}
                placeholder={"Email address"}
                onChange={(e) => setEmail(e)}
              />
            </div>
            <div className="mt-4">
              <InputField
                value={name}
                placeholder={"Full name"}
                onChange={(e) => setName(e)}
              />
            </div>
            <div className="mt-4">
              <InputField
                value={country}
                placeholder={"Country"}
                onChange={(e) => setCountry(e)}
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
                    signup();
                  }}
                  className="w-full button-full hover:cursor-pointer"
                >
                  Sign up
                </button>
              )}
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <h3 className="text-xl font-medium">
                If you already have an account{" "}
              </h3>
              <button
                className="button-signup"
                onClick={() => router.push("/Login")}
              >
                Login
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

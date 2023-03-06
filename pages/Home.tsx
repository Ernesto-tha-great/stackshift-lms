/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import InfoCard from "@/components/common/InfoCard";
import PathwayCard from "@/components/common/PathwayCard";
import { infoCardData, pathways } from "@/constants/pathways";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useUser } from "@/context/userContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [hasMounted, setHasMounted] = useState(false);
  //   const { user } = useUser();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>StackShift</title>
        <meta
          name="description"
          content="an initiative aimed at providing resources and support for developers, builders, and creators in the web3 ecosystem."
          key="desc"
        />
      </Head>
      <section>
        <div className="w-full">
          {/* <!-- Hero section --> */}
          <div id="hero" className="w-full">
            <section className="flex flex-row items-center">
              <div className="w-1/2 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
                <span className="text-base text-gradient font-semibold text-black font-noto">
                  Cohort one.
                </span>
                <h1 className="text-[2.5rem] sm:text-5xl xl:text-7xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 text-black font-noto">
                  Stack
                  <span className="ml-5 text-header-gradient">Shift</span>{" "}
                </h1>
                <p className="text-xl hidden sm:block text-black font-noto mt-0">
                  Enquipping the next generation of web3 builders in the Celo
                  ecosystem.
                </p>
                <div className="h-10">
                  <button
                    className="button"
                    onClick={() => {
                      router.push("/pathways");
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="hidden sm:block w-1/2">
                <div className="w-full">
                  <img
                    src="/website-images/hero-icon.png"
                    className="-mt-4"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://raw.githubusercontent.com/RSurya99/nefa/main/assets/img/pattern/ellipse-1.png"
                className=" sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
              />
              <img
                src="https://raw.githubusercontent.com/RSurya99/nefa/main/assets/img/pattern/ellipse-2.png"
                className=" sm:block absolute top-40 sm:top-20 right-52 sm:right-96 xl:right-[32rem] w-6"
              />
              <img
                src="https://raw.githubusercontent.com/RSurya99/nefa/main/assets/img/pattern/ellipse-3.png"
                className=" sm:block absolute bottom-56 right-24 w-6"
              />
              <img
                src="https://raw.githubusercontent.com/RSurya99/nefa/main/assets/img/pattern/ellipse-3.png"
                className=" sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
              />
            </section>
          </div>

          {/* <!-- Advanced trading tools section --> */}
          <div className="max-w-full ">
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              responsive={responsive}
            >
              {infoCardData.map((c) => (
                <InfoCard key={c.key} data={c} />
              ))}
            </Carousel>
            ;
          </div>

          {/* Show two cards in one line using grid */}
          {/* <section>
           
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-5 px-5 lg:px-0">
              {pathways.map((data) => (
                <PathwayCard key={data.key} data={data} />
              ))}
            </div>
          </section> */}

          {/* <!-- Industry-leading security section --> */}
          <section className="w-full my-24">
            <div className="relative max-w-screen-xl px-8 mx-auto flex flex-row-reverse items-center">
              <div className="w-1/2 lg:col-span-6">
                <div className="w-full">
                  <img
                    src="https://raw.githubusercontent.com/RSurya99/nefa/main/assets/img/industry-leading-security.webp"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-1/2 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
                <h2 className="text-4xl font-semibold text-black font-noto">
                  We offer courses and resources to stay current on web3.
                </h2>
                <ul className="space-y-8 sm:space-y-4 text-lg">
                  <p className="leading-relaxed text-black font-noto">
                    Join us to be part of the decentralized web movement.
                  </p>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoCard = () => {
  return (
    <section className="relative flex flex-nowrap  max-w-full sm:mx-4 my-20 py-16 shadow-xl rounded-2xl overflow-hidden">
      <div className="relative max-w-screen-xl px-4 sm:px-2 grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full sm:mt-20 xl:mt-0">
            <img
              src="/website-images/announcing-celo-academy.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 className="text-4xl font-semibold text-black text-center font-noto">
            Announcing Academy Tools
          </h2>
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-black font-noto">
              A Place to learn Web3 hands-on
            </h4>
            <p className="paragraph text-sm xl:text-base text-black font-noto">
              Welcome to Celo Academy, the premier platform for web3 developers
              to learn about the exciting world of decentralized applications
              (dApps).
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-black font-noto">
              Mission
            </h4>
            <p className="paragraph text-sm xl:text-base text-black font-noto">
              Our mission is to empower developers like you with the knowledge
              and skills necessary to build dApps on multiple frameworks,
              including Celo, Ethereum, and more. Whether you&apos;re a beginner
              or an experienced developer, we have the resources you need to
              succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;

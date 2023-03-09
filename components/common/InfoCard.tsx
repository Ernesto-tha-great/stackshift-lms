/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  data: {
    title: string;
    sub: string;
    desc: string;
    image: string;
  };
}

const InfoCard: React.FC<Props> = ({ data }: Props) => {
  return (
    <section className="relative flex flex-nowrap  max-w-full sm:mx-4 my-20 h-22 py-16 shadow-xl rounded-2xl overflow-hidden">
      <div className="relative max-w-screen-xl px-4 sm:px-2 grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6 my-4">
          <div className=" sm:mt-20 xl:mt-0">
            <img
              src={data.image}
              className="w-120 h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 className="text-4xl font-semibold text-black text-center font-noto">
            {data.title}
          </h2>
          <div className="space-y-2">
            {/* <h4 className="text-lg font-medium text-black font-noto">
              {data.sub}
            </h4> */}
            <p className="paragraph text-sm xl:text-base text-black font-noto">
              {data.desc.length > 200
                ? data.desc.slice(0, 200) + "..."
                : data.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;

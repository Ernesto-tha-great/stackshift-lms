/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Img, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  data: {
    key: string;
    name: string;
    url: string;
    image: any;
    desc: string;
    tags: string[];
  };
};

function PathwayCard({ data }: Props) {
  const router = useRouter();
  return (
    <div
      key={data.key}
      className="border-2 border-black rounded-2xl bg-gypsum w-full  mt-5"
    >
      <Link href={data.url}>
        <Img
          src={data.image}
          // width={450}
          // height={850}
          className="rounded-t-2xl w-full object-cover"
          alt="Flutter Pathway - Celo Academy"
        />
      </Link>
      <div className="py-5 px-6">
        <h3 className="text-black font-noto text-3xl md:text-4xl">
          {data.name}
        </h3>
        <p className="text-black font-noto text-sm md:text-base mt-5">
          {data.desc}
        </p>
      </div>
      <div className="px-6 flex flex-row flex-wrap">
        {data.tags.map((tag) => (
          <div key={tag} className="p-1 text-black rounded-full text-lg">
            #{tag}
          </div>
        ))}
      </div>
      <div className="px-6 pb-6 h-20 mt-3">
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push(data.url);
          }}
          className="w-full button-full hover:cursor-pointer"
        >
          Start your cohort
        </div>
      </div>
    </div>
  );
}

export default PathwayCard;

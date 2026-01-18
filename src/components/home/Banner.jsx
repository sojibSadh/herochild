import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2 className={`${fontBangla.className} text-5xl font-bold leading-20`}>
        ছোট্ট হাতে বড় স্বপ্ন
        আপনার ভালোবাসায় গড়ে উঠুক {" "}
          <span className="text-primary">উজ্জ্বল ভবিষ্যৎ </span>
        </h2>
        <p className="">Buy Every toy with up to 15% Discount</p>
        <button className="btn btn-primary btn-outline">Expore Products</button>
      </div>
      <div className="flex-1">
        <div className="ml-[20%] text-center">
          <Image
            alt="Buy Every toy with up to 15% Discount"
            src={"/assets/hero.png"}
            width={500}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;

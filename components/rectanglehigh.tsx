import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RectangleProps } from "../types/Props";

export default function Rectangle({
  image,
  title,
  testo1,
  testo2,
  image2,
  image3,
  image4,
  path,
}: Readonly<RectangleProps>) {
  return (
    <Link
    href={path ?? "/"}
    className="relative right-3 w-36 bg-gray-500 bg-opacity-25  mx-1 m-1  rounded-xl lg:w-2/5 md:w-2/5 overflow-hidden flex items-center  "
  >
    <div className="w-3/4 p-4 my-12">
    <h1 className="text-xl font-bold ">{title}</h1>
      <h2 className="text-sm ">{testo1}</h2>
    </div>
    <div className="absolute bottom-0 left-1/2 transform w-5/6 -translate-x-1/2 mb-4"
>
      <img
        src={image ?? "/Ellipse o.jpg"}
        alt="Picture of the author"
        />
      <div className="absolute inset-0 flex items-center justify-center text-white">
      <h3 className="text-center font-bold text-2xl text-green-500 mt ">{testo2}</h3>
      </div>
    </div>
  </Link>
);
}

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
    className="relative bg-gray-500 bg-opacity-25  mx-1 m-1  rounded-xl lg:w-2/5 md:w-2/5 overflow-hidden flex items-center  "
  >
    <div className="w-3/4 p-4 my-12">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <h2 className="text-sm  mb-4">{testo1}</h2>
    </div>
    <div className="w-1/4 relative">
      <img
        src={image ?? "/Ellipse o.jpg"}
        alt="Picture of the author"
        className="absolute inset-0 w-30 h-50 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-center font-bold text-green-500">{testo2}</h1>
      </div>
    </div>
  </Link>
);
}

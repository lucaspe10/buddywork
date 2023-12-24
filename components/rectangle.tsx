import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RectangleProps } from "../types/Props";

export default function Rectangle({
  image,
  title,
  testo1,
  testo2,
  path,
}: Readonly<RectangleProps>) {
  return (
    <Link
      href={path ?? "/"}
      className="bg-gray-500 bg-opacity-25 w-36  h-40 mx-auto m-4 rounded-xl flex items-center justify-center flex-col lg:w-2/5 md:w-2/5 "
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <h2 className="text-lg sm: text-left  font-bold mb-2">{testo1}</h2>
      <h1 className="text-center sm:text-right w-3.5  font-bold text-green-500 ">{testo2}</h1>
      <Image
        src={image ?? "/marco.jpg"}
        alt="Picture of the author"
        width={200}
        height={200}
        className="w-20  h-auto max-w-xs ms-auto"/>
    </Link>
  );
}

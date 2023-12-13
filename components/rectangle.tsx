import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RectangleProps {
  image?: string;
  title?: string;
  path?: string;
}

export default function Rectangle({
  image,
  title,
  path,
}: Readonly<RectangleProps>) {
  return (
    <Link
      href={path ?? "/"}
      className="bg-slate-500 w-4/5 h-40 mx-auto m-4 rounded-xl flex items-center justify-center flex-col lg:w-2/5 md:w-2/5"
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <Image
        src={image ?? "/marco.jpg"}
        alt="Picture of the author"
        width={200}
        height={200}
        className="w-36 h-auto mt-4"
      />
    </Link>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RectangleProps } from "../types/Props";

export default function Rectangle({
  image,
  image2,
  image3,
  image4,
  path,
}: Readonly<RectangleProps>) {
  return (
    <div className="w-4/5 h-40 mx-auto m-4 rounded-xl lg:w-2/5 md:w-2/5">
      <Link href={path ?? "/"}>
        <div className="bg-gray-500 bg-opacity-25 w-full flex items-center justify-center rounded-xl overflow-hidden ">
          <div className="flex space-x-2">
            <div className="w-20 h-auto max-w-xs">
              <Image 
                  src={image ?? "/marco.jpg"} 
                  alt="Picture of the author" 
                  width={200} 
                  height={200} />
            </div>
            <div className="w-20 h-auto max-w-xs">
              <Image 
                  src={image2 ?? "/marco.jpg"} 
                  alt="Picture of the author" 
                  width={200} 
                  height={200} />
            </div>
            <div className="w-20 h-auto max-w-xs">
              <Image 
                  src={image3 ?? "/marco.jpg"} 
                  alt="Picture of the author" 
                  width={200} 
                  height={200} />
            </div>
            <div className="w-20 h-auto max-w-xs">
              <Image 
                  src={image4 ?? "/marco.jpg"} 
                  alt="Picture of the author" 
                  width={200} 
                  height={200} />
            </div>
          </div>
          </div>
      </Link>
    </div>
  );
}

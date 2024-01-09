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
          <div className=" bg-gray-500 backdrop-blur-lg bg-opacity-60 w-80 h-14 mx-1 m-4 rounded-xl lg:w-2/5 md:w-2/5 overflow-hidden flex items-center space-x-2 fixed bottom-0 ">
          <Link href={path ?? "/"}>
            <div className="p-8">
              <div className="w-8 h-auto">
                <Image 
                    src={image ?? "/marco.jpg"} 
                    alt="Picture of the author" 
                    width={200} 
                    height={200} 
                    />
              </div>
              </div>
            </Link>
            
            <div className="p-0"></div>
              <Link href={path ?? "/"}>
              <div className="w-8 h-auto ">
                <Image 
                    src={image2 ?? "/marco.jpg"} 
                    alt="Picture of the author" 
                    width={200} 
                    height={200} />
              </div>
            </Link>
            <div className="p-3"></div>
            <Link href={path ?? "/"}>
              <div className="w-8 h-auto ">
                <Image 
                    src={image3 ?? "/marco.jpg"} 
                    alt="Picture of the author" 
                    width={200} 
                    height={200} />
              </div>
            </Link>
            <div className="p-3"></div>
            <Link href={path ?? "/"}>
              <div className="w-8 h-auto">
                <Image 
                    src={image4 ?? "/marco.jpg"} 
                    alt="Picture of the author" 
                    width={200} 
                    height={200} />
              </div>
            </Link>
            </div>
  );
}

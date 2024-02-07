"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Box from "../Box/Index";
interface RetornoShortLinkProps {
  linkEncurtado: string;
}

export default function RetornoShortLink({
  linkEncurtado,
}: RetornoShortLinkProps) {
  const [copiar, setCopiar] = useState(false);

  const handleCopiar = () => {
    navigator.clipboard.writeText(linkEncurtado);
    setCopiar(true);
  };
  return (
    <>
      <div className="flex-col justify-center items-center mt-2">
        <p className="text-center">|</p>
        <p className="text-center">|</p>
        <p className="text-center">|</p>
        <div className=" flex justify-center items-center text-center">
          <IoIosArrowDown className="w-5 h-5"  />
        </div>
        <Box title="Link Encurtado">
          <div className="flex-col w-full items-center justify-center px-12 sm:px-20">
            <p className="text-center">Seu link encurtado:</p>
            <div className="bg-white w-full flex gap-4 justify-center mt-2 h-12 items-center rounded-md">
              <p className=" text-xl font-medium">{linkEncurtado}</p>
              <button onClick={handleCopiar} className="">
                {copiar ? (
                  <MdContentCopy className="w-7 h-7 text-opacity-25 text-black" />
                ) : (
                  <MdContentCopy className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

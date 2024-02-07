import { ReactNode } from "react";

interface BoxProps {
  title: string;
  children: ReactNode;
}
export default function Box({ title, children }: BoxProps) {
  return (
    <div className=" w-full rounded-md h-64 bg-blue-300 flex-col justify-center ">
      <p className="flex  justify-center text-center text-2xl mt-2 pt-5 font-semibold">{title}</p>
      <div className="flex justify-center mt-5 w-full">{children}</div>
    </div>
  );
}

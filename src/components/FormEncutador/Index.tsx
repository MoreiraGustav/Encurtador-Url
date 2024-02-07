"use client";
import { useState } from "react";


interface FormEncurtadorProps {
  onSubmit: (link: string) => void;
}

export default function FormEncurtador({ onSubmit }: FormEncurtadorProps) {
  const [link, setLink] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(link);
  };

  return (
    <>
      <form
        className="w-full px-12 sm:px-28 flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md h-12 w-full px-2 bg-slate-200"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-28 px-2 rounded mt-10 h-12 bg-slate-500 text-slate-200"
          >
            Encurtar
          </button>
        </div>
      </form>
    </>
  );
}

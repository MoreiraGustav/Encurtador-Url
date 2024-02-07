"use client"
import { encurtarLink } from "@/api/ApiBitly";
import Box from "../Box/Index";
import FormEncurtador from "../FormEncutador/Index";
import RetornoShortLink from "../RetornoShortLink/Index";
import { useState } from "react";

export default function Encurtador() {
  const [Retorno, setRetorno] = useState("");
  const handleSubmit = async (link: string) => {
    try {
      const linkEncurtado = await encurtarLink(link);
      setRetorno(linkEncurtado);
    } catch (error) {
      window.alert("link invalido");
    }
  };

  return (
    <div className="w-full mt-28 px-5 flex-col justify-center items-center">
      <Box title={"Encurta Link"}>
        <FormEncurtador onSubmit={handleSubmit} />
      </Box>
      {Retorno && <RetornoShortLink linkEncurtado={Retorno} />}
    </div>
  );
}

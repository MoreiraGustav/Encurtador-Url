import { BitlyClient } from "bitly";

const bitly = new BitlyClient(process.env.NEXT_PUBLIC_BITLY_API_KEY!);
export async function encurtarLink(url: string): Promise<string> {
  try {
    const response = await bitly.shorten(url);

    return response.link;
  } catch (error) {
    console.error("Erro ao encurtar o link:", error);
    throw error;
  }
}

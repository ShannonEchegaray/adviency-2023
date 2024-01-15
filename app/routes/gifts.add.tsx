import { type ActionFunctionArgs } from "@remix-run/node";
import { redirectWithError, redirectWithSuccess } from "remix-toast";
import invariant from "tiny-invariant";
import { isError } from "~/utils/error";
import sharp from "sharp";
import Service from "~/service/gifts";

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const body = await request.formData();
    invariant(body.get("gift"), "No has enviado el regalo");
    invariant(body.get("quantity"), "No has enviado la cantidad");
    const url = body.get("url") as null | string;
    if(url !== null && url.length !== 0){
      const arrayBuffer = await fetch(url as string)
        .then((res) => {
          const content = res.headers.get("content-type") as string;
          if(!content.includes("image")){
            throw new Error("Error: La URL ingresada no contiene una imagen");
          }
          return res.arrayBuffer();
        });

      const data = await sharp(arrayBuffer)
        .resize(32, 32)
        .png()
        .toFormat("png")
        .toBuffer();
      const base = data.toString("base64");

      Service.add(
        {
          title: String(body.get("gift")),
          quantity: Number(body.get("quantity")),
          url: `data:image/png;base64,${base}`
        }
      );
    } else {
      Service.add(
        {
          title: String(body.get("gift")),
          quantity: Number(body.get("quantity")),
          url: "https://placehold.co/32"
        }
      );
    }

    
    return redirectWithSuccess("/gifts", "El regalo se seteo correctamente");
  } catch (error) {
    console.log(error);
    if(isError(error)){
      return redirectWithError("/gifts", error.message.split(":")[1]);
    }
  }
};

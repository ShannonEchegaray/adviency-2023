import { type ActionFunctionArgs } from "@remix-run/node";
import { redirectWithError, redirectWithSuccess } from "remix-toast";
import invariant from "tiny-invariant";
import { isError } from "~/utils/error";
import Service from "~/service/gifts";

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const body = await request.formData();
    invariant(body.get("gift"), "No has enviado el regalo");
    invariant(body.get("quantity"), "No has enviado la cantidad");
    Service.add(
      {
        title: String(body.get("gift")),
        quantity: Number(body.get("quantity"))
      }
    );
    return redirectWithSuccess("/gifts", "El regalo se seteo correctamente");
  } catch (error) {
    if(isError(error)){
      return redirectWithError("/gifts", error.message.split(":")[1]);
    }
  }
};

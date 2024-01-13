import { type ActionFunctionArgs } from "@remix-run/node";
import { redirectWithSuccess } from "remix-toast";
import invariant from "tiny-invariant";
import Service from "~/service/gifts";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  invariant(params.giftIndex, "Something");
  const gift = Service.delete(Number(params.giftIndex));
  return redirectWithSuccess("/gifts", `Se ha eliminado correctamente ${gift.title}`);
};
import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { giftsMock } from "~/mock/gifts";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  invariant(params.giftIndex, "Something");
  giftsMock.splice(Number(params.giftIndex), 1);
  return redirect("/");
};
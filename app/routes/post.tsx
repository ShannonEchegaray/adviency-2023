import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { giftsMock } from "~/mock/gifts";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  console.log(body);
  invariant(body.get("gift"), "Something");
  giftsMock.push(body.get("gift") as string);
  return redirect("/");
};
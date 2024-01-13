import { redirect } from "@remix-run/node";

export default function Index() {
  redirect("/gifts");
}

import { redirectWithSuccess } from "remix-toast";
import Service from "~/service/gifts";

export const action = async () => {
  Service.deleteAll();
  console.log("asdasdasd");
  return redirectWithSuccess("/gifts", "Se han borrado todos los regalos exitosamente");
};
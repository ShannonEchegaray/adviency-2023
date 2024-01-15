import { extendTheme } from "@chakra-ui/react";
import Button from "./button";

export const theme = extendTheme({
  components: {
    Button
  },
  fonts: {
    body: "system-ui, sans-serif"
  },
  styles: {
    global: () => ({
      html: {
        w: "100%",
        h: "100%"
      },
      body: {
        bg: "radial-gradient(circle, #c30e0e 0%, #771313 100%)",
        color: "white"
      },
      "p, input, h1, h2, h3, label": {
        fontFamily: "xmas"
      }
    })
  }
});
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    h1: "xmas"
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
      }
    })
  }
});
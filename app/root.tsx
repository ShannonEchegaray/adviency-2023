import { useContext, useEffect } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ServerStyleContext, ClientStyleContext } from "./context";
import { theme } from "./styles/theme";
import fontWOFF from "./public/fonts/xmas-sweater-stitch/xmas-sweater-stitch.woff";
import fontOTF from "./public/fonts/xmas-sweater-stitch/xmas-sweater-stitch.otf";
import SnowfallBackground from "./components/snowfall/snowfall";
import Fonts from "./styles/fonts";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    { rel: "fonts", href: fontOTF },
    { rel: "fonts", href: fontWOFF }
  ] : []),
];

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    useEffect(() => {
      emotionCache.sheet.container = document.head;
      
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });

      clientStyleData?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          {
            serverStyleData?.map(({ key, ids, css }) => (
              <style
                key={key}
                data-emotion={`${key} ${ids.join(" ")}`}
                dangerouslySetInnerHTML={{ __html: css }}
              />
            ))
          }
        </head>
        <body>
          <SnowfallBackground />
          { children }
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Fonts link={[{
          format: "opentype",
          url: fontOTF
        },
        {
          format: "woff",
          url: fontWOFF
        }]} />        
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

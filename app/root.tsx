import { useContext, useEffect } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { type LoaderFunctionArgs, type LinksFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import fontOTF from "./public/fonts/xmas-sweater-stitch/xmas-sweater-stitch.otf";
import fontWOFF from "./public/fonts/xmas-sweater-stitch/xmas-sweater-stitch.woff";
import favicon from "./public/favicon.ico";

import { ServerStyleContext, ClientStyleContext } from "./context";
import { theme } from "./styles/theme";

import SnowfallBackground from "./components/snowfall/snowfall";
import Fonts from "./styles/fonts";
import BackgroundToast from "./components/background-toast";
import { getToast } from "remix-toast";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    {rel: "font", href: fontOTF},
    {rel: "font", href: fontWOFF},
    {rel: "icon", href: favicon}
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
          <link rel="icon" type="image/icon" href={favicon}/>
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
          <title>Adviency App</title>
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { headers, toast } = await getToast(request);

  return json(
    {toast},
    {headers}
  );
};

export default function App() {
  const { toast } = useLoaderData<typeof loader>();

  return (
    <Document>
      <ChakraProvider theme={theme}>
        { toast && <BackgroundToast toast={toast} /> }
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

import { Global } from "@emotion/react";
import React from "react";

interface FontsProps {
  link: Font[];
}

interface Font {
  format: "woff" | "opentype";
  url: string;
}

const Fonts: React.FC<FontsProps> = ({ link }) => {
  return (
    <Global 
      styles={`
      @font-face {
        font-family: 'xmas';
        src: ${link.map((font) => `url('${font.url}') format('${font.format}')`).join(",")};
      }
      `}
    />
  );
};

export default Fonts;
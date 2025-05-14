"use client";
import React, { ReactNode, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyToClipboard from "../shared/CopyToClipboard";

interface Props {
  children: ReactNode;
  className: string;
}
const Code = ({ children, className }: Props) => {
  const language = className?.replace(/language-/, "") || "text";
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Highlight
      language={language}
      theme={themes.github}
      code={children?.toString()?.trim() ?? ""}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={style}
          className="relative mb-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-secondary py-3 p-3 rounded-tl-md rounded-tr-md border">
            <span className="text-secondary-foreground">{language}</span>
            {isHovered && (
              <div className="absolute right-1 top-1">
                <CopyToClipboard
                  text={children?.toString()?.trim() ?? ""}
                  className="bg-gray-200 hover:bg-gray-200 text-secondary-foreground"
                />
              </div>
            )}
          </div>
          <div className="p-3 rounded-bl-md rounded-br-md border">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="mr-4 text-muted-foreground text-sm">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
};

export default Code;

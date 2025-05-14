import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Code from "./components/code/Code";
import InlineCode from "./components/code/InlineCode";
import PostLink from "./components/link/PostLink";
import { Button } from "./components/ui/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt}
      />
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl text-accent font-bold mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-bold mb-3">{children}</h3>
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 pb-4 w-full mb-0" {...props} />
    ),
    ol: (props) => <ol className="list-decimal pl-6 pb-4 w-full" {...props} />,
    p: ({ children }) => <h1 className="mb-3 text-justify">{children}</h1>,
    blockquote: (props) => (
      <blockquote className="border-l-3 pl-3 my-3" {...props} />
    ),
    a: PostLink,
    pre: ({ children }) => <pre className="mb-3">{children}</pre>,
    hr: () => <hr className="mb-4" />,
    code: (props) => {
      const { className, children } = props;
      if (className) {
        return <Code {...props} />;
      }
      return <InlineCode>{children}</InlineCode>;
    },
    button: ({ children }) => <Button className="mb-3">{children}</Button>,
    ...components,
  };
}

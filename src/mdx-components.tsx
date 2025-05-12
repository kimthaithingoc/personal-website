import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt}
      />
    ),
    ...components,
  };
}

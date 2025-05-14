import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const InlineCode = ({ children }: Props) => {
  return (
    <code className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  );
};

export default InlineCode;

"use client";

import React, { ButtonHTMLAttributes, useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
import { Button } from "../ui/button";

interface CopyToClipboardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CopyToClipboard = ({ text, ...props }: CopyToClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async () => {
    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button onClick={copyText} disabled={isCopied} {...props}>
      {isCopied ? <CopyCheck /> : <Copy />}
    </Button>
  );
};

export default CopyToClipboard;

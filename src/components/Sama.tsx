import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Sama({ children }: { children: React.ReactNode }) {
    return (
      <span className="sama">{children}</span>
    )
  }
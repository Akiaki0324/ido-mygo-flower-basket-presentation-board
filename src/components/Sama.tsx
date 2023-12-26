import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function Sama(props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <span className="sama" {...props}>{props.children}</span>
  )
}
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function NameTag(props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <span className="name-tag" {...props}>{props.children}</span>
  )
}
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function NameTag(props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
    return (
      <span {...props} className="name-tag">{props.children}</span>
    )
  }
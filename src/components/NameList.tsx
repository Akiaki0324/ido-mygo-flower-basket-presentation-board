import React from "react";
import NameTag from "./NameTag";


interface NameListProps extends React.HTMLAttributes<HTMLDivElement>{
    participantslist: string[]
  }
  
export default function NameList(props: NameListProps){
    let participantslist = props.participantslist as string[];
    return (
      <div {...props}>
      {
        participantslist.map((value, index) => {
          if (!(index % 5) && index != 0) {
            return (<React.Fragment key={index}><br /><NameTag key={index}>{value}&nbsp;</NameTag></React.Fragment>)
          }
          return (<NameTag key={index}>{value}&nbsp;</NameTag>)
        })}
      <br />
    </div>
    )
  }
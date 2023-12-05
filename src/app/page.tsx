import Sama from "./sama"
import React from "react"
let participantsList: Array<string> = [
  "迷子A", "迷子A", "迷子A", "迷子A", "迷子A",
  "迷子A", "迷子A", "迷子A", "迷子A", "迷子A",
  "迷子A", "迷子A", "迷子A", "迷子A", "迷子A",
  "迷子A", "迷子A", "迷子A", "迷子A", "迷子A",
  "迷子A", "迷子A", "迷子A", "迷子A", "迷子A",

]


export default function Home() {
  return (
    <div id="bg">
      <div id="board">

        <h1 id="t1">{"祝  ご出演"}</h1>

        <div id="t2">{"IDO x Bang Dream! It's MyGO!!!!!"}</div>

        <h2 id="guest">
          <span className="anon">千早愛音<Sama>役</Sama></span>
          &nbsp;<span className="rana">要楽奈<Sama>役</Sama></span>
          <br />
          &nbsp;&nbsp;&nbsp;<span className="anon">立石 凛<Sama>様</Sama></span>
          <span className="rana">青木 陽菜<Sama>様</Sama></span>
        </h2>

        <div id="p">
          {
            participantsList.map((value, index) => {
              if (!(index % 5) && index != 0) {
                return (<React.Fragment key={index}><br /><span className="name-tag" key={index}>{value}&nbsp;</span></React.Fragment>)
              }
              return (<span className="name-tag" key={index}>{value}&nbsp;</span>)
            })}
          <br />
        </div>

        <div id="special">
          <div id="host">主催<span className="name-tag" id="host-name">: Akiaki</span></div>
          <div id="illu">イラスト<div id="illu-zh">(插画)</div> <span className="name-tag" id="illu-name">: Ray</span></div>
        </div>

      </div>
    </div>
  )
}

import React from "react"
import Sama from "../components/Sama"
import NameTag from "../components/NameTag"
import NameList from "../components/NameList"

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
        <h1 id="t1">祝  ご出演</h1>

        <div id="t2">IDO x BanG Dream! It's MyGO!!!!!</div>

        <h2 id="guest">
          <span className="anon">千早愛音<Sama>役</Sama></span>
          &nbsp;<span className="rana">要楽奈<Sama>役</Sama></span>
          <br />
          &nbsp;&nbsp;&nbsp;<span className="anon">立石 凛<Sama>様</Sama></span>
          <span className="rana">青木 陽菜<Sama>様</Sama></span>
        </h2>

        <NameList id='p' participantslist={participantsList}></NameList>

        <div id="special">
          <div id="host">主催 <NameTag id="host-name">: Akiaki</NameTag></div>
          <div id="illu">イラスト<div id="illu-zh">(插画)</div> <NameTag id="illu-name">: Ray</NameTag></div>
        </div>

      </div>
    </div>
  )
}

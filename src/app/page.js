"use client"
import Spreadsheet from "react-spreadsheet";
import { useState, useEffect } from "react";
import styles from "./page.module.css"

export default function Home() {
  const [names, setNames] = useState(["Denis"]);
  const [roundScore, setRoundScore] = useState([[0, 0]])
  const [score, setScore] = useState([])
  const [page, setPage] = useState(0)

  const zip = (...arr) => Array(Math.max(...arr.map(a => a.length))).fill().map((_, i) => arr.map(a => a[i]));

  function onChangeName(e) {
    setNames(e.map(row => row[0].value))
  }
  function onChangeRS(e) {
    setRoundScore(e.map(row => [row[0].value, row[1].value]))
  }

  function onChangeScore(e) {
    setScore(e.map(row => row.map(v => v?.value)))
  }

  function addPlayer() {
    setNames([...names, ""])
    setRoundScore([...roundScore, [0, 0]])
  }
  function addScore() {
    setScore([...score, roundScore.map(rs => {
      if (isNaN(rs[1]) || isNaN(rs[0]))
        return 0
      else
        return Number(rs[1]) - Number(rs[0])
    })])
    setRoundScore(roundScore.map(rs => [0, 0]))
    console.log(score)
  }


  return (
    <>
      <>
        <div>
          <button onClick={(e) => setPage(page - 1)}>PREV</button>
          <button onClick={(e) => setPage(page + 1)}>NEXT</button>
        </div>
        {(page % 4 === 0) ?
          <>
            <Spreadsheet columnLabels={["Names"]} data={names.map(name => [{ value: name }])} onChange={onChangeName} />
            <button onClick={addPlayer}>add player</button>
          </> :
          (page % 4 === 1) ?
            <>
              <Spreadsheet rowLabels={names} columnLabels={["Minus", "Plus"]} data={roundScore.map(score => [{ value: score[0] }, { value: score[1] }])} onChange={onChangeRS} />
              <button onClick={addScore}>add score</button>
            </> :
            (page % 4 === 2) ?
              <>
                <Spreadsheet columnLabels={names} data={score.map(row => row?.map(v => { return { value: v } }))} onChange={onChangeScore} />
              </> :
              <>
                {(score.length === 0) ? <Spreadsheet data={[[{ value: "" }]]} columnLabels={["Denis"]} /> :
                  <Spreadsheet
                    columnLabels={["Name", "Score"]}
                    data={zip(
                      names,
                      zip(...score)
                    ).map(
                      row => [{ value: row[0] }, { value: row[1]?.reduce((a, b) => (isNaN(a) ? 0 : Number(a)) + (isNaN(b) ? 0 : Number(b)), 0) }]
                    ).sort((a, b) => b[1].value - a[1].value)} />
                }</>
        }
      </>


      {/* <Spreadsheet columnLabels={["Names"]} data={names.map(name => [{ value: name }])} onChange={onChangeName} /> 
      <button onClick={addPlayer}>add player</button>
      <Spreadsheet rowLabels={names} columnLabels={["Minus", "Plus"]} data={roundScore.map(score => [{ value: score[0] }, { value: score[1] }])} onChange={onChangeRS} />
      <button onClick={addScore}>add score</button>
      <Spreadsheet columnLabels={names} data={score.map(row => row?.map(v => { return { value: v } }))} onChange={onChangeScore} />

      {(score.length === 0) ? <Spreadsheet data={[[{ value: "" }]]} columnLabels={["Denis"]} /> :
        <Spreadsheet
          columnLabels={["Name", "Score"]}
          data={zip(
            names,
            zip(...score)
          ).map(
            row => [{ value: row[0] }, { value: row[1]?.reduce((a, b) => (isNaN(a) ? 0 : Number(a)) + (isNaN(b) ? 0 : Number(b)), 0) }]
          ).sort((a, b) => b[1].value - a[1].value)} />
      } */}
    </>
  )

}


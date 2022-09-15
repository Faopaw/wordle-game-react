import { React, useEffect, useState } from "react";
import "./KeyBoardModule.css"

function KeyboardModule(props) {
const addLetter = props.keyboardProps.addLetter;
const submitCurrentGuess = props.keyboardProps.submitCurrentGuess
    return (
        <div className="keyboardModule">
            <div className="keyboardRow">
                <button onClick={() => {addLetter("Q"); console.log("Q has been pressed")}} className="keyButton">q</button>
                <button onClick={() => {props.addLetter.addLetter("W")}} className="keyButton">w</button>
                <button onClick={() => {props.addLetter.addLetter("E")}} className="keyButton">e</button>
                <button onClick={() => {props.addLetter.addLetter("R")}} className="keyButton">r</button>
                <button onClick={() => {props.addLetter.addLetter("T")}} className="keyButton">t</button>
                <button onClick={() => {props.addLetter.addLetter("Y")}} className="keyButton">y</button>
                <button onClick={() => {props.addLetter.addLetter("U")}} className="keyButton">u</button>
                <button onClick={() => {props.addLetter.addLetter("I")}} className="keyButton">i</button>
                <button onClick={() => {props.addLetter.addLetter("O")}} className="keyButton">o</button>
                <button onClick={() => {props.addLetter.addLetter("P")}} className="keyButton">p</button>
            </div>
            <div className="keyboardRow">
                <button onClick={() => {props.addLetter.addLetter("A")}} className="keyButton">a</button>
                <button onClick={() => {props.addLetter.addLetter("S")}} className="keyButton">s</button>
                <button onClick={() => {props.addLetter.addLetter("D")}} className="keyButton">d</button>
                <button onClick={() => {props.addLetter.addLetter("F")}} className="keyButton">f</button>
                <button onClick={() => {props.addLetter.addLetter("G")}} className="keyButton">g</button>
                <button onClick={() => {props.addLetter.addLetter("H")}} className="keyButton">h</button>
                <button onClick={() => {props.addLetter.addLetter("J")}} className="keyButton">j</button>
                <button onClick={() => {props.addLetter.addLetter("K")}} className="keyButton">k</button>
                <button onClick={() => {props.addLetter.addLetter("L")}} className="keyButton">l</button>
            </div>
            <div className="keyboardRow">
                <button onClick={() => {submitCurrentGuess()}} className="keyButton">ENTER</button>
                <button onClick={() => {props.addLetter.addLetter("Z")}} className="keyButton">z</button>
                <button onClick={() => {props.addLetter.addLetter("X")}} className="keyButton">x</button>
                <button onClick={() => {props.addLetter.addLetter("C")}} className="keyButton">c</button>
                <button onClick={() => {props.addLetter.addLetter("V")}} className="keyButton">v</button>
                <button onClick={() => {props.addLetter.addLetter("B")}} className="keyButton">b</button>
                <button onClick={() => {props.addLetter.addLetter("N")}} className="keyButton">n</button>
                <button onClick={() => {props.addLetter.addLetter("M")}} className="keyButton">m</button>
                <button className="keyButton">BKSPC</button>
            </div>
        </div>
    )
}


export default KeyboardModule
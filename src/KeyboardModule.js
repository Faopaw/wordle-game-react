import { React, useEffect, useState } from "react";
import "./KeyBoardModule.css"

function KeyboardModule(props) {
const addLetter = props.keyboardProps.addLetter;
const submitCurrentGuess = props.keyboardProps.submitCurrentGuess;
const removeLetter = props.keyboardProps.removeLetter;
    return (
        <div className="keyboardModule">
            <div className="keyboardRow">
                <button onClick={() => {addLetter("Q")}} className="keyButton">q</button>
                <button onClick={() => {addLetter("W")}} className="keyButton">w</button>
                <button onClick={() => {addLetter("E")}} className="keyButton">e</button>
                <button onClick={() => {addLetter("R")}} className="keyButton">r</button>
                <button onClick={() => {addLetter("T")}} className="keyButton">t</button>
                <button onClick={() => {addLetter("Y")}} className="keyButton">y</button>
                <button onClick={() => {addLetter("U")}} className="keyButton">u</button>
                <button onClick={() => {addLetter("I")}} className="keyButton">i</button>
                <button onClick={() => {addLetter("O")}} className="keyButton">o</button>
                <button onClick={() => {addLetter("P")}} className="keyButton">p</button>
            </div>
            <div className="keyboardRow">
                <button onClick={() => {addLetter("A")}} className="keyButton">a</button>
                <button onClick={() => {addLetter("S")}} className="keyButton">s</button>
                <button onClick={() => {addLetter("D")}} className="keyButton">d</button>
                <button onClick={() => {addLetter("F")}} className="keyButton">f</button>
                <button onClick={() => {addLetter("G")}} className="keyButton">g</button>
                <button onClick={() => {addLetter("H")}} className="keyButton">h</button>
                <button onClick={() => {addLetter("J")}} className="keyButton">j</button>
                <button onClick={() => {addLetter("K")}} className="keyButton">k</button>
                <button onClick={() => {addLetter("L")}} className="keyButton">l</button>
            </div>
            <div className="keyboardRow">
                <button onClick={() => {submitCurrentGuess()}} className="keyButton">ENTER</button>
                <button onClick={() => {addLetter("Z")}} className="keyButton">z</button>
                <button onClick={() => {addLetter("X")}} className="keyButton">x</button>
                <button onClick={() => {addLetter("C")}} className="keyButton">c</button>
                <button onClick={() => {addLetter("V")}} className="keyButton">v</button>
                <button onClick={() => {addLetter("B")}} className="keyButton">b</button>
                <button onClick={() => {addLetter("N")}} className="keyButton">n</button>
                <button onClick={() => {addLetter("M")}} className="keyButton">m</button>
                <button onClick={() => {removeLetter()}} className="keyButton">BKSPC</button>
            </div>
        </div>
    )
}


export default KeyboardModule
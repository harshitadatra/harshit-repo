import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😘": "face with blowing kiss",
  "💞": "revolving hearts",
  "😳": "disbelief",
  "😔": "sad",
  "💌 ": "love letter",
  "😑": "expressionless face",
  "🤗 ": "hugging face",

  "❤️": "love",
  "🙃": "upside-down face"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  const [userInput, setValue] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = " the meaning is not defined in database";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    setValue(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input placeholder="enter the emoji here" onChange={inputHandler}></input>
      <h2> {meaning}</h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

import React, { Fragment } from "react";
const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

const buttons = rows.map((row) => row.split(""));

export const Keyboard = ({ onBackspace, onPressed, letterClasses }) => {
  return (
    <div className="keyboard">
      <div>
        {buttons.map((row, index) => (
          <div className={"row"} key={index}>
            {row.map((letter) => (
              <button className={letterClasses[letter]} onClick={() => onPressed(letter)} key={letter}>
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => onBackspace()}>Backspace</button>
      </div>
    </div>
  );
};

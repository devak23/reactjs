import { useState } from "react";
import { Banner, StatusMessage, Button } from "./components";
import "./App.css";
import { BUTTON_TYPES } from "./data/buttonConstants";

export default function App() {
  // use a state to store the advice and the count with proper setter methods
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // fetch the advice from an API and set it on the advice state
  const handleOnClick = () => {
    fetch("https://api.adviceslip.com/advice").then((response) => {
      response.ok &&
        response.json().then((data) => {
          setAdvice(data.slip.advice);
          setCount((count) => count + 1);
        });
    });
  };

  // Build the advice UI
  return (
    <div className="app">
      <div className="button-wrapper">
        <Button
          type={BUTTON_TYPES.PRIMARY}
          label={"Get Advice"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-arrow-right-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          }
          iconPosition="RIGHT"
          onBtnClick={handleOnClick}
        />
      </div>
      <Banner message={advice} />
      <StatusMessage count={count} />
    </div>
  );
}

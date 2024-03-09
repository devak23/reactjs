import { useState } from "react";
import { Banner, StatusMessage } from "./components";
import { getAdviceFromAPI } from "./api";

export default function App() {
  // use a state to store the advice and the count with proper setter methods
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // fetch the advice from an API and set it on the advice state
  function getAdvice() {
    const data = getAdviceFromAPI();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  // Build the advice UI
  return (
    <div>
      <button onClick={getAdvice}>Get Advice</button>
      <Banner message={advice} />
      <StatusMessage count={count} />
    </div>
  );
}

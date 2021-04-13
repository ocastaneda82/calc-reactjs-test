//importación
import React, { useState } from "react";
import words from "lodash.words";
import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import "./App.css";

//generación
const App = () => {
  // Hook con destructuring
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <main className="react-calculator">
      <Result value={value} />
      <div className="numbers">
        <Numbers
          onClickNumber={(number) => {
            setStack(`${stack}${number}`);
          }}
        />
      </div>
      <Functions
        onContentClear={(operation) => {
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          // eslint-disable-next-line
          setStack(String(eval(stack)));
        }}
      />
    </main>
  );
};

//exportación
export default App;

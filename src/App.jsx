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
  console.log("Renderización App", value);

  return (
    <main className="react-calculator">
      <Result value={value} />
      <div className="numbers">
        <Numbers
          onClickNumber={(number) => {
            console.log(`Click en number: ${number}`);
            // llamado al nuevo estado
            setStack(`${stack}${number}`);
          }}
        />
      </div>
      <Functions
        onContentClear={(operation) => {
          console.log(`operation: ${operation}`);
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            console.log(`onDelete: ${newStack}`);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log(`operation: ${operation}`);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log(`equal: ${equal}`);
          // eslint-disable-next-line
          setStack(String(eval(stack)));
        }}
      />
    </main>
  );
};

//exportación
export default App;

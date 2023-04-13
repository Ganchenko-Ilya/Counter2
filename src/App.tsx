import React, { useEffect, useState } from "react";

import s from "./App.module.css";
import { Counter } from "./components/Counter";
import { Reset } from "./components/Reset";

export type errorsType =
  | "Incorrect value!"
  | "enter values and press 'set'"
  | "";

function App() {
  const [count, setCount] = useState<number>(0);
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [maxValueFinal, setMaxValueFinal] = useState(0);
  const [error, setError] = useState<errorsType>(
    "enter values and press 'set'"
  );
  const [status, setStatus] = useState<boolean>(true);

  const statusChange = () => {
    setStatus(!status);
  };

  return (
    <div className={s.bodyWrapper}>
      {status ? (
        <Counter
          count={count}
          error={error}
          maxValueFinal={maxValueFinal}
          statusChange={statusChange}
          setCount={setCount}
          setError={setError}
          setMaxValue={setMaxValue}
          setMaxValueFinal={setMaxValueFinal}
          setMinValue={setMinValue}
          maxValue={maxValue}
          minValue={minValue}
        />
      ) : (
        <Reset
          error={error}
          maxValue={maxValue}
          minValue={minValue}
          setCount={setCount}
          setMaxValue={setMaxValue}
          setMaxValueFinal={setMaxValueFinal}
          setMinValue={setMinValue}
          setError={setError}
          setStatus={setStatus}
          status={status}
        />
      )}
    </div>
  );
}

export default App;

// <div className={s.wrapper}>
//   <div className={s.displayWrapper}>
//     <Display
//       error={error}
//       maxValueFinal={maxValueFinal}
//       count={count}
//     />
//   </div>

//   <div className={s.buttonWrapper}>
//     <Button
//       disabled={!(count < maxValueFinal)}
//       name="Inc"
//       callBack={addCount}
//     />
//     <Button disabled={!count} name="Reset" callBack={deleteCount} />
//     <Button callBack={statusChange} name="Set" disabled={false} />
//   </div>
// </div>
// <div className={s.wrapper}>
//   <div className={s.displayWrapper}>
//     <DisplaySet
//       maxValue={maxValue}
//       minValue={minValue}
//       addError={addError}
//       error={
//         +maxValue - +minValue <= 0 &&
//         +maxValue >= 0 &&
//         +minValue > 0 &&
//         !!maxValue
//           ? true
//           : false
//       }
//     />
//   </div>

//   <div className={s.buttonWrapper}>
//     <Button
//       disabled={error === "enter values and press 'set'" ? false : true}
//       name="Set"
//       callBack={addValue}
//     />
//   </div>
// </div>

//////////////////////////////////////////////////////////////////
{
  /* <div className={s.wrapper}>
        <div className={s.displayWrapper}>
          <DisplaySet
            maxValue={maxValue}
            minValue={minValue}
            addError={addError}
            error={
              +maxValue - +minValue <= 0 &&
              +maxValue >= 0 &&
              +minValue > 0 &&
              !!maxValue
                ? true
                : false
            }
          />
        </div>
        

        <div className={s.buttonWrapper}>
          <Button
            disabled={error === "enter values and press 'set'" ? false : true}
            name="Set"
            callBack={addValue}
          />
        </div>
      </div> */
}

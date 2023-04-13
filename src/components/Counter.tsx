import React, { useEffect } from "react";
import { Display } from "./Display";
import { Button } from "./Button";
import s from "./Counter.module.css";
import { errorsType } from "../App";

type CounterProps = {
  error: errorsType;
  maxValueFinal: number;
  count: number;

  statusChange: () => void;

  setMinValue: (value: string) => void;
  setMaxValue: (value: string) => void;
  setError: (value: errorsType) => void;
  setCount: (value: number) => void;
  setMaxValueFinal: (value: number) => void;
  maxValue: string;
  minValue: string;
};

export const Counter = (props: CounterProps) => {
  useEffect(() => {
    const min = localStorage.getItem("minValue");
    const max = localStorage.getItem("maxValue");
    if (min !== null && max !== null) {
      props.setMinValue(min);
      props.setMaxValue(max);
      props.setError("");
      props.setCount(+min);
      props.setMaxValueFinal(+max);
    }
  }, []);
  const addCount = () => {
    if (props.count < +props.maxValue) {
      props.setCount(props.count + 1);
    }
  };
  const deleteCount = () => {
    props.setCount(+props.minValue);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.displayWrapper}>
        <Display
          error={props.error}
          maxValueFinal={props.maxValueFinal}
          count={props.count}
        />
      </div>

      <div className={s.buttonWrapper}>
        <Button
          disabled={!(props.count < props.maxValueFinal)}
          name="Inc"
          callBack={addCount}
        />
        <Button disabled={!props.count} name="Reset" callBack={deleteCount} />
        <Button callBack={props.statusChange} name="Set" disabled={false} />
      </div>
    </div>
  );
};

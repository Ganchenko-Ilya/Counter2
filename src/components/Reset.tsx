import React from "react";

import s from "./Reset.module.css";
import { DisplaySet } from "./DisplaySet";
import { Button } from "./Button";
import { errorsType } from "../App";

type ResetProps = {
  maxValue: string;
  minValue: string;

  error: errorsType;

  setMaxValue: (value: string) => void;
  setMinValue: (value: string) => void;
  setCount: (value: number) => void;
  setMaxValueFinal: (value: number) => void;
  setError: (value: errorsType) => void;
  setStatus: (value: boolean) => void;
  status: boolean;
};

export const Reset = (props: ResetProps) => {
  const addError = (valueMin: string, valueMax: string) => {
    props.setMaxValue(valueMax);
    props.setMinValue(valueMin);
    props.setCount(0);
    props.setMaxValueFinal(0);

    if (+valueMin >= 0 && +valueMax >= 0 && +valueMax - +valueMin > 0) {
      props.setError("enter values and press 'set'");
    } else {
      props.setError("Incorrect value!");
    }
  };
  const addValue = () => {
    props.setCount(+props.minValue);
    props.setMaxValueFinal(+props.maxValue);
    props.setError("");
    localStorage.setItem("maxValue", props.maxValue);
    localStorage.setItem("minValue", props.minValue);
    props.setStatus(!props.status);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.displayWrapper}>
        <DisplaySet
          maxValue={props.maxValue}
          minValue={props.minValue}
          addError={addError}
          error={
            +props.maxValue - +props.minValue <= 0 &&
            +props.maxValue >= 0 &&
            +props.minValue > 0 &&
            !!props.maxValue
              ? true
              : false
          }
        />
      </div>

      <div className={s.buttonWrapper}>
        <Button
          disabled={
            props.error === "enter values and press 'set'" ? false : true
          }
          name="Set"
          callBack={addValue}
        />
      </div>
    </div>
  );
};

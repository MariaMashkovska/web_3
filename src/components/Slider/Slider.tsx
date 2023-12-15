import { ChangeEvent, useState } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
  label?: string; // Make label property optional
  step: number | string;
  min: number | string;
  max: number | string;
  onChange: (value: string) => void;
}

export const Slider = (props: SliderProps) => {
  const [inputValue, setInputValue] = useState({ value: ' ' });

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setInputValue({ value: event?.currentTarget?.value });
    props.onChange(event?.currentTarget?.value);
  };

  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input
        className={styles.slider}
        type="range"
        step={props.step}
        min={props.min}
        max={props.max}
        value={inputValue.value}
        onChange={handleChange}
      />
      {props.label && <p className={styles.sliderPrice}>Selected value: {inputValue.value}</p>}
    </div>
  );
};

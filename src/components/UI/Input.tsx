import React, { ChangeEvent } from "react";
import Button from "./Button";

type InputProps = {
  text: string;
  color: string;
  background: string;
  textButton: string;
  colorButton: string;
  backgroundButton: string;
  className: string;
};

const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    color,
    background,
    textButton,
    colorButton,
    backgroundButton,
    className,
  } = props;

  const styles = {
    border: "none",
    padding: "18px 32px",
    fontSize: "16px",
    flexGrow: "1",
    color,
    background,
  };

  return (
    <div className={className}>
      <input
        type="text"
        style={styles}
        placeholder={text}
      />
      <Button
        text={textButton}
        color={colorButton}
        background={backgroundButton}
        className="input__button"
      />
    </div>
  );
};

export default Input;

import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { SignModal } from "./SignModal";

type InputProps = {
  text: string;
  color: string;
  background: string;
  textButton: string;
  colorButton: string;
  backgroundButton: string;
  className: string;
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    color,
    background,
    textButton,
    colorButton,
    backgroundButton,
    className,
  } = props;

  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        style={styles}
        placeholder={text}
      />
      <Button
        text={textButton}
        color={colorButton}
        background={backgroundButton}
        className="input__button"
        onClick={toggleDialog}
      />
      <SignModal isOpen={isOpen} onClose={toggleDialog} emailValue={value} />
    </div>
  );
};

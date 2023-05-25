import React from "react";
import "../../scss/layout/About.scss";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAuth } from "../../context/AuthProvider";

type AboutProps = {
  title: string;
  text: string;
  extraText?: string;
  order: "default" | "reversed";
  imgUrl: string;
  element: "button" | "input";
};

export const About: React.FC<AboutProps> = ({
  title,
  text,
  extraText,
  order,
  imgUrl,
  element,
}) => {
  const { user } = useAuth();

  return (
    <div className="about">
      <div
        className="about__content"
        style={{ order: order === "default" ? -1 : 1 }}
      >
        <div
          className="about__container"
          style={{
            textAlign: order === "default" ? "left" : "right",
            alignItems: order === "default" ? "start" : "end",
          }}
        >
          <h3 className="about__title">{title}</h3>
          <p className="about__text">{text}</p>
          <p className="about__text--second">{extraText}</p>
          {element === "button" || !user ? (
            <Button
              text="Get in touch"
              color="#2a254b"
              background="#f9f9f9"
              className="about__button"
            />
          ) : (
            <Input
              text="your@gmail.com"
              color="#000000"
              background="#F9F9F9"
              textButton="Sign up"
              colorButton="#FFFFFF"
              backgroundButton="#2a254b"
              className="about__input"
            />
          )}
        </div>
      </div>
      <img src={imgUrl} className="about__img" />
    </div>
  );
};

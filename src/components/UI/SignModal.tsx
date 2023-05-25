import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import "../../scss/UI/SignModal.scss";
import { Button } from "./Button";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  emailValue: string;
};

export const SignModal: React.FC<ModalType> = ({
  isOpen,
  onClose,
  emailValue,
}) => {
  const { register, login, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"sign up" | "login">("sign up");

  useEffect(() => {
    setEmail(emailValue);
  }, [emailValue]);

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(email, password, userName);
    if (activeTab === "sign up") {
      await register(email, password, userName);
    } else {
      await login(email, password);
    }
  };

  const handleTabChange = (tab: "sign up" | "login") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(".sign-dialog__content");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div>
      {isOpen && (
        <div className="sign-dialog">
          <div className="sign-dialog__content">
            <div className="sign-dialog__tabs">
              <p
                className={`sign-dialog__tab ${
                  activeTab === "sign up" ? "active" : ""
                }`}
                onClick={() => handleTabChange("sign up")}
              >
                Sign Up
              </p>
              <p
                className={`sign-dialog__tab ${
                  activeTab === "login" ? "active" : ""
                }`}
                onClick={() => handleTabChange("login")}
              >
                Log In
              </p>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="sign-dialog__form">
              {activeTab === "sign up" && (
                <input
                  value={userName}
                  className="sign-dialog__input"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => changeUserName(e)}
                />
              )}
              <input
                value={email}
                className="sign-dialog__input"
                type="email"
                placeholder="Your email"
                onChange={(e) => changeEmail(e)}
              />
              <input
                value={password}
                className="sign-dialog__input"
                type="password"
                placeholder="Password"
                onChange={(e) => changePass(e)}
              />
              <div className="sign-dialog__buttons">
                <Button
                  text={activeTab === "sign up" ? "Sign Up" : "Log In"}
                  color="#FFFFFF"
                  background="#2a254b"
                  className="sign-dialog__button"
                  type="submit"
                />
                <button
                  type="button"
                  className="sign-dialog__button_google"
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

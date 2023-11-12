import { FC, useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import Input from "../input/input";
import useForm from "../../services/hooks/use-form";

import stylesAuth from "./auth.module.css";

interface IAuth {
  handleSubmit: (name: string, password: string) => void;
  title: string;
  buttonName: string;
  redirectName: string;
  redirectPath: string;
  redirectPathName: string;
  error: boolean;
  errorText: string;
}

const Auth: FC<IAuth> = ({
  handleSubmit,
  title,
  buttonName,
  redirectName,
  redirectPath,
  redirectPathName,
  error = false,
  errorText,
}): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const { values, handleChange, setValues } = useForm({
    name: { value: "", valueValid: false },
    password: { value: "", valueValid: false },
  });

  useEffect(() => {
    if (values.name.valueValid && values.password.valueValid) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [values]);

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(values.name.value, values.password.value);
  };

  return (
    <div className={stylesAuth.signupFormContainer}>
      <div className={stylesAuth.signupSocialContainer}>
        <h2 className={stylesAuth.signupTitle}>{title}</h2>
      </div>
      <div className={stylesAuth.signupInputsContainer}>
        <form
          className={stylesAuth.inputsForm}
          onSubmit={handleSignup}
          noValidate
        >
          <div className={stylesAuth.inputsContainer}>
            <Input
              placeholder="Имя"
              name="name"
              maxLength={30}
              onChange={handleChange}
              value={values.name.value}
              styled="secondary"
              required
            />
            <Input
              placeholder="Пароль"
              name="password"
              maxLength={30}
              onChange={handleChange}
              value={values.password.value}
              styled="secondary"
              password
              type="password"
              required
            />
          </div>
          <div className={stylesAuth.formsButton}>
            <button
              className={stylesAuth.button}
              type="submit"
              disabled={buttonDisabled}
            >
              {buttonName}
            </button>
            {error && <p className={stylesAuth.incorrect_text}>{errorText}</p>}
          </div>
        </form>
        <div className={stylesAuth.signupReadyContainer}>
          <span className={stylesAuth.signupReadyTitle}>{redirectName}</span>
          <Link
            to={{ pathname: redirectPath }}
            className={stylesAuth.signinLink}
          >
            {redirectPathName}
          </Link>
        </div>
        <div className={stylesAuth.signupBackgroundImage} />
      </div>
    </div>
  );
};

export default Auth;

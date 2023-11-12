import { FC, useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/input/input";
import useForm from "../../services/hooks/use-form";

import stylesSignup from "./signup.module.css";

const Signup: FC = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [registration, setRegistration] = useState<{
    isLoad: boolean;
    isError: boolean;
    errorText: string;
    payload: any;
  }>({
    isLoad: false,
    isError: false,
    errorText: "",
    payload: {},
  });

  const { values, handleChange, setValues } = useForm({
    name: { value: "", valueValid: false },
    password: { value: "", valueValid: false },
  });

  useEffect(() => {
    if (
      values.name.valueValid &&
      values.password.valueValid
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [values]);

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* dispatch(
      signupAction({
        name: values.name.value,
        password: values.password.value,
      })
    ); */
  };

  return (
    <div className={stylesSignup.signupFormContainer}>
      <div className={stylesSignup.signupSocialContainer}>
        <h2 className={stylesSignup.signupTitle}>Регистрация</h2>
      </div>
      <div className={stylesSignup.signupInputsContainer}>
        <form
          className={stylesSignup.inputsForm}
          onSubmit={handleSignup}
          noValidate
        >
          <div className={stylesSignup.inputsContainer}>
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
          <div className={stylesSignup.formsButton}>
            <button
              className={stylesSignup.button}
              type="submit"
              disabled={buttonDisabled}
            >
              создать аккаунт
            </button>
            {registration.isError && (
              <p className={stylesSignup.incorrect_text}>
                {registration.errorText}
              </p>
            )}
          </div>
        </form>
        <div className={stylesSignup.signupReadyContainer}>
          <span className={stylesSignup.signupReadyTitle}>
            Уже прошли регистрацию?
          </span>
          <Link to={{ pathname: "/signin" }} className={stylesSignup.signinLink}>
            Войти
          </Link>
        </div>
        <div className={stylesSignup.signupBackgroundImage} />
      </div>
    </div>
  );
};

export default Signup;

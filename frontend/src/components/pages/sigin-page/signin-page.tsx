import stylesSigninPage from "./signin-page.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { FC, useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../auth/auth";

export const SigninPage: FC = (): JSX.Element => {
  const [login, setLogin] = useState<{
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

  let [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    openModal();
    return () => {
      closeModal();
    };
  }, []);

  const getLogin = () => {};

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          navigate("/");
        }}
        className={stylesSigninPage.section}
      >
        <Dialog.Panel>
          <Auth
            handleSubmit={getLogin}
            buttonName="войти"
            title="Авторизация"
            redirectPath="/signup"
            redirectPathName="Зарегистрироваться"
            redirectName="Еще не прошли регистрацию?"
            error={login.isError}
            errorText={login.errorText}
          />
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

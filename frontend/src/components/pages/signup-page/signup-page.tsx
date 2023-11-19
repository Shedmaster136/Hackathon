import stylesSignupPage from "./signup-page.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { FC, useState, useEffect, Fragment } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Auth from "../../auth/auth";
import { getServerRegister } from "../../../utils/auth-api";

export const SignupPage: FC = (): JSX.Element => {
  const [registration, setRegistration] = useState<{
    isLoad: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorText: string;
  }>({
    isLoad: false,
    isSuccess: false,
    isError: false,
    errorText: "",
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

  const getRegistration = (name: string, password: string) => {
    setRegistration({
      ...registration,
      isLoad: true,
    });
    getServerRegister({ name, password })
      .then((res: {}) => {
        setRegistration({
          ...registration,
          isLoad: false,
          isSuccess: true,
        });
      })
      .catch((err: any) =>
        setRegistration({
          ...registration,
          isLoad: false,
          isError: true,
          errorText: "Ошибка регистрации",
        })
      );
  };

  return registration.isSuccess ? (
    <Navigate to={"/"} />
  ) : (
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
        className={stylesSignupPage.section}
      >
        <Dialog.Panel>
          <Auth
            handleSubmit={getRegistration}
            buttonName="создать аккаунт"
            title="Регистрация"
            redirectPath="/signin"
            redirectPathName="Войти"
            redirectName="Уже прошли регистрацию?"
            error={registration.isError}
            errorText={registration.errorText}
          />
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

import { FC } from "react";

import stylesHeader from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={stylesHeader.header}>
      <nav className={stylesHeader.navigation}>
        <ul className={stylesHeader.menuList}>
          <li className={stylesHeader.linkContainer}>
            <NavLink className={stylesHeader.link} to={{ pathname: "/" }}>
              Правила игры
            </NavLink>
          </li>
          <li className={stylesHeader.linkContainer}>
            <NavLink className={stylesHeader.link} to={{ pathname: "/" }}>
              Таблица лидеров
            </NavLink>
          </li>
          <li className={stylesHeader.linkContainerLogo}>
            {" "}
            <NavLink className={stylesHeader.linkLogo} to={{ pathname: "/" }}>
              <div className={stylesHeader.logo} />{" "}
            </NavLink>
          </li>
          <li className={stylesHeader.linkContainer}>
            <NavLink className={stylesHeader.link} to={{ pathname: "/signup" }}>
              Регистрация
            </NavLink>
          </li>
          <li className={stylesHeader.linkContainer}>
            <NavLink className={stylesHeader.link} to={{ pathname: "/signin" }}>
              Вход
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

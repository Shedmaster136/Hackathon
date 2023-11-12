import { FC } from "react";

import stylesHeader from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { RuleSection } from "../rule-section/rule-section";
import { ScoreTable } from "../score-table/score-table";
import { SAMPLE_SCORE } from "../../utils/constants";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={stylesHeader.header}>
      <nav className={stylesHeader.navigation}>
        <ul className={stylesHeader.menuList}>
          <li className={stylesHeader.linkContainer}>
            <Popover>
              <Popover.Button className={`${stylesHeader.link}`}>
                Об игре
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className={`${stylesHeader.popoverContainer} ${stylesHeader.popoverContainerRule}`}
                >
                  <RuleSection />
                </Popover.Panel>
              </Transition>
            </Popover>
          </li>
          <li className={stylesHeader.linkContainer}>
            <Popover>
              <Popover.Button
                className={`${stylesHeader.link} `}
              >
                Таблица рекордов
              </Popover.Button>
              <Popover.Panel
                className={`${stylesHeader.popoverContainer} ${stylesHeader.popoverContainerScore}`}
              >
                <ScoreTable scores={SAMPLE_SCORE} />
              </Popover.Panel>
            </Popover>
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

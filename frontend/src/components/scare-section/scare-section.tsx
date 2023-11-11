import { CARD_COLOR_LIST } from "../../utils/constants";
import { ICard } from "../../utils/types/props";
import { ScareCard } from "../scare-card/scare-card";
import stylesScareSection from "./scare-section.module.css";
import React, { FC } from "react";

interface ICards {
  cards: ICard[];
}

export const ScareSection: FC<ICards> = ({ cards }): JSX.Element => {
  return (
    <div className={stylesScareSection.page}>
      <h2 className={stylesScareSection.title}>Какие бываю страхи</h2>
      <ul className={stylesScareSection.paragraphsContainer}>
        {cards?.length > 0 &&
          cards.map(({ url, header, text }, index) => {
            return (
              <li
                className={`${stylesScareSection.card}`}
                key={index}
              >
                <ScareCard header={header} url={url} text={text} colorList={CARD_COLOR_LIST} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

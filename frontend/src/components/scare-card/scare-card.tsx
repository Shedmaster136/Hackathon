import { ICard } from "../../utils/types/props";
import stylesScareCard from "./scare-card.module.css";
import React, { FC} from "react";

interface IScareCard extends ICard {
  colorList: string[]
}

export const ScareCard: FC<IScareCard> = ({ header, text, url, colorList }): JSX.Element => {
  const getRandomColor = (colorList: string[]): string => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return(colorList[randomIndex]);
  };

  return (
    <div className={stylesScareCard.card} style={{ backgroundColor: getRandomColor(colorList) }}>
      <div className={stylesScareCard.contentContainer}>
      <img className={stylesScareCard.image} src={url} alt={header} />
      <h2 className={stylesScareCard.title}>{header}</h2>
      <p className={`${stylesScareCard.paragraphText} `}>{text}</p>
      </div>
    </div>
  );
};

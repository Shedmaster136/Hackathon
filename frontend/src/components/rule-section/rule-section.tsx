import stylesRuleSection from "./rule-section.module.css";
import React, { FC } from "react";

export const RuleSection: FC = (): JSX.Element => {
  return (
    <div className={stylesRuleSection.page}>
      <h2 className={stylesRuleSection.title}>Что за игра и как играть</h2>
      <ul className={stylesRuleSection.paragraphsContainer}>
        <li className={`${stylesRuleSection.paragraph} ${stylesRuleSection.paragraphRight}`}>
          <p
            className={`${stylesRuleSection.paragraphText} `}
          >
            {" "}
            Игра с концептом "point-and-click" предлагает уникальное погружение
            в мир проблем приемных детей. Она призвана привлечь внимание к
            вызовам, с которыми сталкиваются дети, пережившие сиротский опыт, и
            их новые семьи. Цель игры - помочь игрокам лучше понять и преодолеть
            страхи и травмы ребенка.
          </p>
        </li>
        <li className={`${stylesRuleSection.paragraph} ${stylesRuleSection.paragraphLeft}`}>
          <p
            className={`${stylesRuleSection.paragraphText} `}
          >
            {" "}
            Игра направлена на то, чтобы обратить внимание общественности на
            важность поддержки и сопровождения приемных семей. Часто родители не
            готовы к психологическим проблемам, с которыми сталкиваются их
            приемные дети, и им не хватает знаний и инструментов для
            эффективного справления с ними. Игра стремится показать, что помощь
            и поддержка специалистов необходимы для успешной адаптации и
            преодоления травмы сиротского прошлого.
          </p>
        </li>
        <li className={`${stylesRuleSection.paragraph} ${stylesRuleSection.paragraphRight}`}>
          <p
            className={`${stylesRuleSection.paragraphText}`}
          >
            В игре игрокам необходимо "отстреливать" страхи, символизирующие
            проблемы, с которыми сталкиваются приемные дети. Путем точного
            наведения курсора мыши и нажатия кнопкой мыши на эти страхи на
            игровом поле, игроки будут набирать очки и стимулировать рост
            понимания проблем и эмоционального исцеления.
          </p>
        </li>
      </ul>
      <button className={stylesRuleSection.button}>Играть</button>
    </div>
  );
};

import React, { FC } from "react";
import stylesGameSection from "./game-section.module.css";
import { GamePortal } from "../game-portal/game-portal";
import { Popover, Transition } from "@headlessui/react";
import { RuleSection } from "../rule-section/rule-section";
import { ScareSection } from "../scare-section/scare-section";
import { INITIAL_CARD, SAMPLE_SCORE } from "../../utils/constants";
import { ScoreTable } from "../score-table/score-table";

export const GameSection: FC = (): JSX.Element => {
  return (
    <section className={stylesGameSection.container}>
      <div className={stylesGameSection.buttonsDescriptionContainer}>
        <Popover>
          <Popover.Button
            className={`${stylesGameSection.popoverButton} ${stylesGameSection.popoverButtonRule}`}
          >
            Правила
          </Popover.Button>
            <Popover.Panel
              className={`${stylesGameSection.popoverContainer} ${stylesGameSection.popoverContainerRule}`}
            >
              <RuleSection />
            </Popover.Panel>
        </Popover>
        <Popover>
          <Popover.Button
            className={`${stylesGameSection.popoverButton} ${stylesGameSection.popoverButtonScare}`}
          >
            Страхи
          </Popover.Button>
          <Popover.Panel
            className={`${stylesGameSection.popoverContainer} ${stylesGameSection.popoverContainerScare}`}
          >
            <ScareSection cards={INITIAL_CARD} />
          </Popover.Panel>
        </Popover>
      </div>
      <GamePortal />
      <div className={stylesGameSection.buttonScoreTableContainer}>
        <Popover>
          <Popover.Button
            className={`${stylesGameSection.popoverButton} ${stylesGameSection.popoverButtonScore}`}
          >
            {" "}
            <span className={stylesGameSection.popoverButtonText}>
              {" "}
              Рекорды
            </span>
          </Popover.Button>
          <Popover.Panel
            className={`${stylesGameSection.popoverContainer} ${stylesGameSection.popoverContainerScore}`}
          >
            <ScoreTable/>
          </Popover.Panel>
        </Popover>
      </div>
    </section>
  );
};

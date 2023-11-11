import { IScores } from "../../utils/types/props";
import { TableMUI } from "../table/table";
import stylesScoreTable from "./score-table.module.css";
import React, { FC } from "react";



export const ScoreTable: FC<IScores> = ({ scores }): JSX.Element => {
  return (
    <div className={stylesScoreTable.page}>
      <h2 className={stylesScoreTable.title}>Таблица рекордов</h2>
      <div className={stylesScoreTable.tableContainer}>
        <TableMUI scores={scores}/>
      </div>
    </div>
  );
};

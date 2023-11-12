import { getServerUsersScore } from "../../utils/auth-api";
import { IScore } from "../../utils/types/props";
import { TableMUI } from "../table/table";
import stylesScoreTable from "./score-table.module.css";
import React, { FC, useEffect, useState } from "react";

export const ScoreTable: FC = (): JSX.Element => {
  const [score, setScore] = useState<IScore[]>([]);
  useEffect(() => {
    getServerUsersScore()
      .then((res: any) => {
        setScore(res)
        console.log(res);
      })
      .catch((err: any) => console.log(err));
    console.log(process.env);
  }, []);

  return (
    <div className={stylesScoreTable.page}>
      <h2 className={stylesScoreTable.title}>Таблица рекордов</h2>
      <div className={stylesScoreTable.tableContainer}>
        <TableMUI scores={score} />
      </div>
    </div>
  );
};

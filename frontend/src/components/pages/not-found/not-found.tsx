import notFound from "./not-found.module.css";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export const NotFound: FC = (): JSX.Element => {
  return (
    <section className={notFound.page}>
      <div className={notFound.notFoundContainer}>
        <h2 className={notFound.title}>404</h2>
        <p className={notFound.text}>Страница не найдена</p>
        <p className={notFound.text}>
          <Link to={{ pathname: "/" }} className={notFound.link}>
            Вернуться на главную
          </Link>
        </p>
      </div>
    </section>
  );
};

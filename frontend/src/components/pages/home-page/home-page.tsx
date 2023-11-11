import { FC } from "react";

import { Header } from "../../header/header";
import stylesHomePage from "./home-page.module.css";
import { GameSection } from "../../game-section/game-section";

const HomePage: FC = (): JSX.Element => {
  return (
    <div className={stylesHomePage.layout}>
      <Header />
      <GameSection />
    </div>
  );
};

export default HomePage;

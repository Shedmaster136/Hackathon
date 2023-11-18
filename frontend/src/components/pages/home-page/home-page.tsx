import { FC, useContext, useEffect } from "react";

import { Header } from "../../header/header";
import stylesHomePage from "./home-page.module.css";
import { GameSection } from "../../game-section/game-section";
import { Footer } from "../../footer/footer";
import { AppContext } from "../../../utils/contexts/appContext";

interface IHomePage {
  isLoadGame: boolean;
}

export const HomePage: FC<IHomePage> = ({ isLoadGame }): JSX.Element => {
  const [store, setStore] = useContext(AppContext);

  useEffect(() => {
    setStore({ ...store, gameLoad: isLoadGame });
  }, []);

  return (
    <div className={stylesHomePage.layout}>
      <Header />
      <GameSection />
      <Footer />
    </div>
  );
};

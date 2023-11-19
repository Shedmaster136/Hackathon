import React, { FC } from "react";
import stylesGamePortal from "./game-portal.module.css";
import Phaser from "phaser";
import { useEffect, useContext } from "react";
// @ts-ignore //
import Basic from "../../game-files/scenes/Basic";
import { AppContext } from "../../utils/contexts/appContext";

export const GamePortal: FC = (): JSX.Element => {
  const [store, setStore] = useContext(AppContext);
  useEffect(() => {
    let game: Phaser.Game;
    if (store.gameLoad) {
      console.log("im load");
      const config = {
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        parent: "game-container",
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0 },
            debug: false,
          },
        },
      };
      game = new Phaser.Game(config);
      game.scene.add("Basic", Basic);

      if (store.gameStart) {
        game.scene.start("Basic");
      }
    }
    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [store.gameLoad, store.gameStart]);

  return (
    <section className={stylesGamePortal.container}>
     { !(store.gameLoad && store.gameStart) &&
      <div className={stylesGamePortal.containerStart}>
        <div className={stylesGamePortal.containerButton}>
          <button
            className={stylesGamePortal.button}
            onClick={() => setStore({ ...store, gameStart: true })}
          >
            Играть!
          </button>
        </div>
      </div>}
      <div id="game-container" className={stylesGamePortal.gameContainer} />
    </section>
  );
};

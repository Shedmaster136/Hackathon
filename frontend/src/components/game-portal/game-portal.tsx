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
    const game = new Phaser.Game(config);
    game.scene.add("Basic", Basic);
    if (store.gameStart) {
      game.scene.start("Basic");
    }
    function preload() {
      function preload() {
        //this.load.pack();
      }
    }
    return () => {
      game.destroy(true);
    };
  }, [store.gameLoad]);

  return !store.gameLoad ? (
    <section className={stylesGamePortal.containerStart}>
      <div className={stylesGamePortal.containerButton}></div>
    </section>
  ) : (
    <section
      id="game-container"
      className={stylesGamePortal.container}
    ></section>
  );
};

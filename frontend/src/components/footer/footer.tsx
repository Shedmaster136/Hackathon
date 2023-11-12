import { FC } from "react";

import stylesFooter from "./footer.module.css";


export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={stylesFooter.footer}>
      <div className={stylesFooter.content}>
        <h2 className={stylesFooter.title}>Created by:</h2>
         <ul className={stylesFooter.linksList}>
            <li><a href="" className={stylesFooter.link} target="_blank" rel="noreferrer" >Denigsim</a></li>
            <li><a href="https://github.com/Shedmaster136" className={stylesFooter.link} target="_blank" rel="noreferrer" >Shedmaster136</a></li>
            <li><a href="https://github.com/Wacorasu" className={stylesFooter.link} target="_blank" rel="noreferrer" >Wacorasu</a></li>
         </ul>
      </div>
    </footer>
  );
};

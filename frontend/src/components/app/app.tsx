import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import { NotFound } from "../pages/not-found/not-found";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

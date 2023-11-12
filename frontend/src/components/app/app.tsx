import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home-page/home-page";
import { SignupPage } from "../pages/signup-page/signup-page";
import { NotFound } from "../pages/not-found/not-found";
import { SigninPage } from "../pages/sigin-page/signin-page";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <SignupPage />
              <HomePage />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SigninPage />
              <HomePage />
            </>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

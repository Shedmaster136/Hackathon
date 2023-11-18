import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home-page/home-page";
import { SignupPage } from "../pages/signup-page/signup-page";
import { NotFound } from "../pages/not-found/not-found";
import { SigninPage } from "../pages/sigin-page/signin-page";
import { AppContext } from "../../utils/contexts/appContext";

const App: FC = (): JSX.Element => {
  const store = useState<{
    user: string;
    score: string;
    gameStart: boolean;
    gameLoad: boolean;
  }>({ user: "", score: "", gameLoad: false, gameStart: false });
  return (
    <AppContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <SignupPage />
                <HomePage isLoadGame={false} />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <SigninPage />
                <HomePage isLoadGame={false}/>
              </>
            }
          />
          <Route path="/" element={<HomePage isLoadGame={true} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

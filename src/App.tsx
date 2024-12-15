import useAuth from "./useAuth";
import Login from "./Login";

import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route  path="/newsfeed" element={<MainPage />} />
        </Routes>
      </BrowserRouter>

   
    </>
  );
};

export default App;

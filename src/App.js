import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { NewGamePage } from "./pages/NewGamePage";
import { NewODGame } from "./pages/one-device/NewODGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewGamePage />} />
      <Route path="/one-device/">
        <Route index element={<NewODGame />} />
      </Route>
    </Routes>
  );
}

export default App;

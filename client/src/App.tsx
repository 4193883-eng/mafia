import { Route, Routes } from "react-router-dom";
import { NewGamePage } from "./pages/NewGamePage";
import { NewODGame } from "./pages/one-device/stage-one/PlayerCountChooser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewGamePage />} />
      <Route path="/one-device/">
        <Route path="stage-one" element={<NewODGame />} />
        <Roiu
      </Route>
    </Routes>
  );
}

export default App;

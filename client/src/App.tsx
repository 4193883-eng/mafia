import { Route, Routes } from "react-router-dom";
import { NewGamePage } from "./pages/NewGamePage";
import { NewODGame } from "./pages/one-device/stage-one/PlayerCountChooser";
import { RootLayout } from "./components/RootLayout/RootLayout";
import { ChooseJobDistribution } from "./pages/one-device/stage-two/ChooseJobDistrubition";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<NewGamePage />} />
        <Route path="/one-device/">
          <Route path="stage-one" element={<NewODGame />} />
          <Route path="stage-two" element={<ChooseJobDistribution />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

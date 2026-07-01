import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NFTDetails from "./pages/NFTDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/nft/:id"
          element={<NFTDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
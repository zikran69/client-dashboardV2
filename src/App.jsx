import { BrowserRouter } from "react-router-dom";
import { global } from "./context";
import Router from "./routers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [dataID, setDataID] = useState(null);
  const store = {
    dataId: dataID,
    updateDataID: (value) => {
      setDataID(value);
    },
  };

  return (
    <BrowserRouter>
      <global.Provider value={store}>
        <Router />
      </global.Provider>
    </BrowserRouter>
  );
}

export default App;

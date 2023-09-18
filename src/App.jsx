import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./pages/context";
import { useEffect, useState } from "react";

function App() {
  const [db, setDb] = useState();
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("https://6507a74b3a38daf4803f9ee4.mockapi.io/kamar")
      .then((res) => res.json())
      .then(setDb);
    fetch("https://6507a74b3a38daf4803f9ee4.mockapi.io/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);
  const store = {
    database: db,
    images: images,
  };
  if (db && images) {
    return (
      <BrowserRouter>
        <global.Provider value={store}>
          <Router />
        </global.Provider>
      </BrowserRouter>
    );
  }
}

export default App;

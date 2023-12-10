import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SelectCategory({}) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:2000/option`)
      .then((res) => res.json())
      .then(setState);
  }, []);
  console.log(state);
  return (
    <>
      {state.map((opc, index) => {
        return (
          <option key={index} value={opc.idCategory}>
            {opc.nameCategory}
          </option>
        );
      })}
    </>
  );
}

import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SelectPrice({ category }) {
  const [state, setState] = useState([]);
  let cat = 0;

  if (category == "") {
    cat = 0;
  } else {
    cat = category;
  }

  useEffect(() => {
    fetch(`http://localhost:2000/option/category/${cat}`)
      .then((res) => res.json())
      .then(setState);
  }, [cat]);
  console.log(state);
  return (
    <>
      {state.map((opc, index) => {
        return (
          <option selected key={index} value={opc.price}>
            {opc.price}
          </option>
        );
      })}
    </>
  );
}

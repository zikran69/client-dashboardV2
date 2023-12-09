import { useEffect, useState } from "react";
export default function SelectFloor({ }) {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:2000/option/floor`)
        .then((res) => res.json())
        .then(setState);
    }, []);
    console.log(state)
  return (
    <>
      {state.map((opc, index) => {
        return (
            <option key={index} value={opc.idFloor}>{opc.nameFloor}</option>
        );
      })}
          
        </>
  );
}

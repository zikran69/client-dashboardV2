import { useEffect, useState } from "react";
import auth from "../../utils/auth";
export default function SelectPayment({ }) {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:2000/option/status-payment`)
        .then((res) => res.json())
        .then(setState);
    }, []);
    console.log(state)
  return (
    <>
      {state.map((opc, index) => {
        return (
            <option key={index} value={opc.idPayment}>{opc.paymentStatus}</option>
        );
      })}
          
        </>
  );
}

import { useState } from "react";
import Input from "../Input/Input";
import ListEarnings from "../ListEarnings/ListEarnings";
import './Earnings.css';

const Earnings = ({ addEarning, cleanEarnings, removeEarning, earnings, updateEarning }) => {

  const [error, setError] = useState({ num: "", reason: "" });

  const boolean = error.num || error.reason ? false : true;

  const [num, setNum] = useState(0);

  const [reason, setReason] = useState("");

  const handleInputNum = (e) => {
    const input = e.target.value;
    const msgError = "No se permite ingresar numeros negativos o 0";

    if (input <= 0 || !input) setError({ ...error, num: msgError });
    else setError("");

    setNum(input);
  };

  const handleInput = (e) => {
    const input = e.target.value;

    if (!input) setError({ ...input, reason: "Debe completar el campo" });
    else setError({ ...input, reason: "" });

    setReason(input);
  };

  const earning = {
    amount: num,
    reason,
    id: crypto.randomUUID()
  };

  const confirm = () => {
    if (earning.reason && earning.amount > 0) {
      addEarning(earning);
      setNum(0);
      setReason("");
    }
  };

  return (
    <section>
      <div className="box-inputs">
        <Input
          error={error.num}
          handleInput={handleInputNum}
          id={"numE"}
          message={"Ingresa el monto del ingreso:"}
          value={num}
          key={"num"}
          type={"number"}
        />

        <Input
          error={error.reason}
          handleInput={handleInput}
          id={"reasonE"}
          message={"Ingresa el motivo del ingreso:"}
          value={reason}
          key={"reason"}
          type={"text"}
        />

        <div className="box-buttons">
          <button disabled={!boolean} onClick={confirm} className="add-new">Agregar ingreso</button>
          <button onClick={cleanEarnings} disabled={!earnings.length} className="delete-all">Borrar ingresos</button>
        </div>
      </div>

      {earnings.length > 0 && <ListEarnings earnings={earnings} removeEarning={removeEarning} updateEarning={updateEarning} />}
    </section>
  )
}

export default Earnings
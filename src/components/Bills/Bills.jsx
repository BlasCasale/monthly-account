import { useState } from 'react'
import Input from '../../Input/Input';
import ListBills from '../ListBills/ListBills';

const Bills = ({ cleanBills, removeBill, addBill, bills, updateBill }) => {

  const [num, setNum] = useState(0);

  const [reason, setReason] = useState("");

  const [error, setError] = useState({ num: "", reason: "" });

  const boolean = error.num || error.reason ? false : true;

  const handleInput = (e) => {
    const input = e.target.value;
    const wrongMessage = "Debe completar el campo";
    if (!input) setError({ ...error, reason: wrongMessage });
    else setError({ ...error, num: "" });
    setReason(input);
  };

  const handleInputNum = (e) => {
    const input = e.target.value;
    const wrongMessage = "No se permite ingresar numeros negativos o 0";
    if (input <= 0 || !input) setError({ ...error, num: wrongMessage });
    else setError({ ...error, reason: "" });
    setNum(input);
  };

  const bill = {
    id: crypto.randomUUID(),
    reason,
    amount: num
  };

  const confirm = () => {
    if (bill.reason && bill.amount > 0) {
      addBill(bill);
      setReason("");
      setNum("");
    }
  };

  return (
    <section>
      <div className='box-inputs'>
        <Input
          error={error.num}
          handleInput={handleInputNum}
          id={"numB"}
          message={"Ingrese el monto del gasto:"}
          type={"number"}
          value={num}
          key={"num"}
        />

        <Input
          error={error.reason}
          handleInput={handleInput}
          id={"reasonB"}
          message={"Ingrese el motivo del gasto:"}
          type={"text"}
          value={reason}
          key={"reason"}
        />

        <div className='box-buttons'>
          <button onClick={confirm} disabled={!boolean} className='add-new'>Agregar gasto</button>
          <button onClick={cleanBills} disabled={!bills.length} className='delete-all'>Borrar gastos</button>
        </div>
      </div>

      {bills.length > 0 && <ListBills bills={bills} removeBill={removeBill} updateBill={updateBill} />}
    </section>
  )
}

export default Bills
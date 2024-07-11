import { useRef, useState } from "react";
import Input from "../Input/Input";
import './Modal.css';

const Modal = ({ closeModal, amount, id, reason, update }) => {
  const modalRef = useRef();

  const [num, setNum] = useState(amount);
  const [newReason, setNewReason] = useState(reason);

  const [error, setError] = useState({ num: "", reason: "" });

  const boolean = error.num || error.reason ? false : true;

  const handleInput = (e) => {
    const input = e.target.value;
    const wrongMessage = "Debe completar el campo";
    if (!input) setError({ ...error, reason: wrongMessage });
    else setError({ ...error, num: "" });
    setNewReason(input);
  };

  const handleInputNum = (e) => {
    const input = e.target.value;
    const wrongMessage = "No se permite ingresar numeros negativos o 0";
    if (input <= 0 || !input) setError({ ...error, num: wrongMessage });
    else setError({ ...error, reason: "" });
    setNum(input);
  };

  const handleContainerClick = (e) => {
    if (!modalRef.current.contains(e.target)) closeModal();
  };

  const confirm = () => {
    const newBill = {
      id,
      reason: newReason,
      amount: num
    };

    update(newBill);

    closeModal();
  }

  return (
    <div className='upperContainer' onClick={handleContainerClick}>
      <div className='innerContainer' ref={modalRef}>
        <Input
          error={error.num}
          handleInput={handleInputNum}
          id={"numU"}
          message={"Ingrese el monto del gasto:"}
          type={"number"}
          value={num}
          key={"num"}
        />

        <Input
          error={error.reason}
          handleInput={handleInput}
          id={"reasonU"}
          message={"Ingrese el motivo del gasto:"}
          type={"text"}
          value={newReason}
          key={"reason"}
        />

        <button onClick={confirm} disabled={!boolean} className="update">Actualizar gasto</button>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x icon-header" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={closeModal}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
          <path d="M9 9l6 6m0 -6l-6 6" />
        </svg>
      </div>
    </div>
  );
}

export default Modal
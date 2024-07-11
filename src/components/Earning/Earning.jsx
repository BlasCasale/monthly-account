import { useState } from 'react';
import './Earning.css';
import Modal from '../Modal/Modal';

const Earning = ({ id, amount, removeEarning, reason, updateEarning }) => {

  const [boolean, setBoolean] = useState(false);

  const closeModal = () => setBoolean(!boolean);

  return (
    <>
      <li>
        <p>Motivo: {reason}</p>
        <p>Monto: <span className="amount">${amount}</span></p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit icon-header" width="26" height="26" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={closeModal}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash icon-header" width="26" height="26" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => removeEarning(id)}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </div>
      </li>

      {boolean && <Modal amount={amount} closeModal={closeModal} id={id} reason={reason} update={updateEarning} />}
    </>
  )
}

export default Earning
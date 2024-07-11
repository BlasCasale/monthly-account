import { useEffect } from "react";
import { useState } from "react";
import Earnings from "../Earnings/Earnings";
import Bills from "../Bills/Bills";
import './Body.css';

const Body = () => {

  const [data, setData] = useState(() => {
    const infoInLS = localStorage.getItem('bills');
    if (infoInLS) {
      return JSON.parse(infoInLS)
    } else {
      return {
        bills: [],
        earnings: []
      }
    }
  });

  useEffect(() => {
    const infoToPutLS = JSON.stringify(data);
    localStorage.setItem('bills', infoToPutLS);
  }, [data]);

  const addBill = (bill) => {
    setData(prevData => {
      return {
        ...prevData,
        bills: [...prevData.bills, bill]
      }
    })
  };

  const addEarning = (earning) => {
    setData(prevData => {
      return {
        ...prevData,
        earnings: [...prevData.earnings, earning]
      }
    });
  };

  const removeBill = (id) => {
    const filteredBills = data.bills.filter(bill => bill.id !== id)
    setData(prevData => {
      return {
        ...prevData,
        bills: filteredBills
      }
    });
  };

  const removeEarning = (id) => {
    const filteredEarnings = data.earnings.filter(earning => earning.id !== id)
    setData(prevData => {
      return {
        ...prevData,
        earnings: filteredEarnings
      }
    });
  };

  const cleanEarnings = () => {
    setData(prevData => {
      return {
        ...prevData,
        earnings: []
      }
    });
  };

  const cleanBills = () => {
    setData(prevData => {
      return {
        ...prevData,
        bills: []
      }
    });
  };

  const updateBill = (bill) => {
    const findIndex = data.bills.findIndex((el) => el.id === bill.id);

    const updatedArray = data.bills.map((el, i) => i === findIndex ? bill : el);

    setData(prevData => {
      return {
        ...prevData,
        bills: updatedArray
      }
    });
  };

  const updateEarning = (earning) => {
    const findIndex = data.earnings.findIndex((el) => el.id === earning.id);

    const updatedArray = data.earnings.map((el, i) => i === findIndex ? earning : el);

    setData(prevData => {
      return {
        ...prevData,
        earnings: updatedArray
      };
    });
  };

  return (
    <main>
      <Earnings addEarning={addEarning} cleanEarnings={cleanEarnings} removeEarning={removeEarning} earnings={data.earnings} updateEarning={updateEarning} />
      <Bills cleanBills={cleanBills} removeBill={removeBill} bills={data.bills} addBill={addBill} updateBill={updateBill} />
    </main>
  )
}

export default Body
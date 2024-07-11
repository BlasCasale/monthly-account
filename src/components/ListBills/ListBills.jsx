import Bill from "../Bill/Bill";

const ListBills = ({ bills, removeBill, updateBill }) => {

  const totalAmount = bills.reduce((acc, amount) => acc + Number(amount), 0);
  return (
    <ul>
      {
        bills.length > 0 &&
        bills.map((bill) => <Bill key={bill.id} {...bill} removeBill={removeBill} updateBill={updateBill} />)
      }
      {
        bills.ListBills > 0 &&
        <li>
          <span>${totalAmount}</span>
        </li>
      }
    </ul>
  )
}

export default ListBills
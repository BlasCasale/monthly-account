import Earning from '../Earning/Earning'

const ListEarnings = ({ earnings, removeEarning, updateEarning }) => {

  const totalAmount = earnings.reduce((acc, earning) => acc + Number(earning.amount), 0);

  return (
    <ul>
      {
        earnings.length > 0 &&
        earnings.map((earning) => {
          return (
            <Earning key={earning.id} removeEarning={removeEarning} {...earning} updateEarning={updateEarning} />
          )
        })
      }
      {
        earnings.length > 0 &&
        <li>
          <span>Total: ${totalAmount}</span>
        </li>
      }
    </ul>
  )
}

export default ListEarnings
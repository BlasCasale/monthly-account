import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Tus cuentas mensuales</h1>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-2 icon-header" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
        <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
      </svg>
    </header>
  )
}

export default Header
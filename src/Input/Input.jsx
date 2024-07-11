import './Input.css';

const Input = ({ error, id, handleInput, value, message, type }) => {
  return (
    <div className='box-input'>
      <div className='box-minor'>
        <label htmlFor={id} className='label'>{message}</label>
        <input type={type} onChange={handleInput} value={value} id={id} className='input'/>
      </div>
      <p>{error}</p>
    </div>
  )
}

export default Input
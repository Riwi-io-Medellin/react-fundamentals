import { ChangeEvent } from 'react'
import style from './input.module.css'

interface Props {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}
export const Input = ({type, placeholder, name, value, onChange, label}: Props) => {
  return (
    <div className={style.container}>
      {/* <span>{label}</span> */}
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}  className={style.input__container}/>
    </div>
  )
}
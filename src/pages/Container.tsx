/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '../component/input/Input'
import { ChangeEvent, useState } from 'react'
import style from './container.module.css'

const Container = () => {

  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    email: ''
  })

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit = async (e: any) => {
    e.preventDefault()
    // eslint-disable-next-line no-extra-boolean-cast
    if(!!form.name) {
      return
    }
    setForm({
      name: '',
      age: '',
      city: '',
      email: '',
    })
  }

  return (
    <div className={style.container}>
      <form onSubmit={onSubmit}>
        <Input
          placeholder='escriba un nombre'
          value={form.name}
          name='name'
          onChange={handlechange}
          type='text'
          label='Nombre completo'
        />  

        <button type='submit'>enviar</button>    
      </form>
    </div>
  )
}

export default Container
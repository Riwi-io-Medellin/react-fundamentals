/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '../../component/input/Input'
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
     
    if(!!form.name || !!form.email || !!form.city || !!form.age) {
      alert('Tienes campos pendiente por llenar')
      return
    }
    setForm({
      name: '',
      age: '',
      city: '',
      email: '',
    })
    e.reset()
  }

  return (
    <div className={style.container}>
      <form onSubmit={onSubmit}>
        <Input
          placeholder='escriba su nombre'
          value={form.name}
          name='name'
          onChange={handlechange}
          type='text'
          label='Nombre completo'
        />
        <Input
          placeholder='escriba su edad'
          value={form.age}
          name='age'
          onChange={handlechange}
          type='number'
          label='Ingrese su edad'
        />
        <Input
          placeholder='escriba su email'
          value={form.email}
          name='email'
          onChange={handlechange}
          type='email'
          label='Email'
        />
        <Input
          placeholder='escriba donde vive'
          value={form.city}
          name='city'
          onChange={handlechange}
          type='text'
          label='Ciudad'
        />
        <button type='submit'>enviar</button>    
      </form>
      {JSON.stringify(form, null, 2)}
    </div>
  )
}

export default Container
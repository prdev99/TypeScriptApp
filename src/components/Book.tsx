import React, { useState } from 'react'
import ViewDetails from './ViewDetails'

interface FormValue{
  title:string,
  author:string,
  price:string
}

export interface Books{
  id:number,
  title:string,
  author:string,
  price:string
}

export default function Book() {
  const [books, setBooks] = useState<Books[]>([])
  const [formValue, setFormValue] = useState<FormValue>({
    title: '',
    author: '',
    price: ''
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {title, author, price} = formValue
    setBooks([
      ...books,
      {
        id:Math.random(),
        title:title,
        author:author,
        price:price
      }
    ])
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormValue({
      ...formValue,
      [name]:value
    })
  }
  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Title</label>
          <input type='text' name='title' value={formValue.title} onChange={handleChange}></input>
          <label htmlFor=''>Author</label>
          <input type='text' name='author' value={formValue.author} onChange={handleChange}></input>
          <label htmlFor=''>Price</label>
          <input type='text' name= 'price' value={formValue.price} onChange={handleChange}></input>

          <button type = 'submit'>Add</button>
          <button type = 'submit'>Update</button>
        </form>
      </div>
      <ViewDetails books={books}/>
    </div>
  )
}

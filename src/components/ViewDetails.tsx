import React from 'react'
import { Books } from './Book'
import { log } from 'console'

interface Prop{
  books:Books[]
}

export default function ViewDetails({books}:Prop) {
  // log
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item:{id:number, title:string, author:string, price:string}) =>(
          <tr key = {item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.price}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

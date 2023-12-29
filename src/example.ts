let firstName:string = 'fruit'
let count:number = 0
let isLoading:boolean = true

const user:{name:string, age:number}={
  name: 'Hello',
  age: 24
}

//Array

const fruits:string[] = ['banana', 'apple']
const number:number[] = [1,2,3,4]
const users:{id:number, name:string}[] = [{id:1, name:'hghg'}]

// Function

const sum=(a:number, b:number) =>{
  return a+b
}

sum(1,2)

const handleApiResponse = (payload: {userId: number}, callback:(a:number, b:number) => number) => {

}
handleApiResponse({userId:1}, sum)

// Interface

interface Person{
  department:string
}

interface User extends Person{
  name:string,
  id:number,
  getUser:()=>void
}

let data:User={
  name:'hello',
  id: 1,
  getUser:()=>{

  },
  department: ''
}


//Using

type employee = {
  id:number,
  name:string
}

type manager = {
  department:string
} &employee

let employeewithmanager:manager = {
  department: 'AA',
  id: 1,
  name: 'dd'
}
import React from 'react'
import Productlist from './Components/Productlist'
import Counter from './Components/Counter'
import Todolist from './Components/Todolist'

const App = () => {
  return (
    <div>
      {/* <Productlist products={["apple", "banana", "graphs","strawbery","eggs" ,"kiwi", "tomato"]}/> */}
      {/* <Counter/> */}
      <Todolist/>
    </div>
  )
}

export default App
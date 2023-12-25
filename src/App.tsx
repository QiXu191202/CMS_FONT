// import { useState } from 'react'
import './App.css'
// 组件
import Info from '@/components/Info/Info'
import List from '@/components/List/List'

function App() {

  return (
    <>
      <div className='flex h-full'>
        <Info />
        <List />
      </div>
    </>
  )
}

export default App

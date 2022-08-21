import React from 'react'
import './style.css'
import { NewEntry, TransactionList } from '../../components'

export default function Dashboard() {
  return (
    <>
        <div className='main-container'>
          <div className="main-header">
          <h2>My Budget</h2>
          </div>
        <div className='main-content'>
          <NewEntry />
          <TransactionList />
        </div>
        </div>
    </>
  )
}

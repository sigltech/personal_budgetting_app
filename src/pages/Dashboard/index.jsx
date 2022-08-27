import React, { useState } from 'react'
import './style.css'
import { NewEntry, TransactionList, NewTransactionModal } from '../../components'

export default function Dashboard() {
  const [ModalOpen, setModalOpen] = useState(false)
  const [transactionName, setTransactionName] = useState('')
  const [transactionAmount, setTransactionAmount] = useState('')
  const [transactionCategory, setTransactionCategory] = useState('')
  const [transactionDate, setTransactionDate] = useState('')
  const [transactionList, setTransactionList] = useState([])

  return (
    <>
        <div className='main-container'>
          <div className="main-header">
          <h2>My Budget</h2>
          </div>
        <div className='main-content'>
          <TransactionList
          transactionName={transactionName}
          transactionAmount={transactionAmount}
          transactionCategory={transactionCategory}
          transactionDate={transactionDate}
          transactionList={transactionList}
          setTransactionName={setTransactionName}
          setTransactionAmount={setTransactionAmount}
          setTransactionCategory={setTransactionCategory}
          setTransactionDate={setTransactionDate}
          setTransactionList={setTransactionList}
          setModalOpen={setModalOpen} />
        </div>
          <NewTransactionModal
          transactionName={transactionName}
          transactionAmount={transactionAmount}
          transactionCategory={transactionCategory}
          transactionDate={transactionDate}
          setTransactionName={setTransactionName}
          setTransactionAmount={setTransactionAmount}
          setTransactionCategory={setTransactionCategory}
          setTransactionDate={setTransactionDate}
          setTransactionList={setTransactionList}
          ModalOpen={ModalOpen} setModalOpen={setModalOpen} />
        </div>
    </>
  )
}

import React, { useState } from 'react'

export default function TransactionList({setModalOpen, setTransactionName, setTransactionAmount, setTransactionCategory, setTransactionDate, setTransactionList, transactionName, transactionAmount, transactionCategory, transactionDate, transactionList}) {

  const handleOpen = () => setModalOpen(true);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('deleted');
  }

  return (
    <div className='transactions-list-container'>
      <div className='transactions-list-header'>
        <h1>transactions</h1>
        <button onClick={handleOpen} className='new-transaction-btn'>New transaction</button>
      </div>
      <div className='transactions-list-body'>
        <table className='transactions-list-table'>
          <thead className='headers'>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Account</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {transactionList.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.name}</td>
                    <td>£{transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td>Account</td>
                    <td><span>Edit</span></td>
                    <td onClick={handleDelete}><span>Delete</span></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

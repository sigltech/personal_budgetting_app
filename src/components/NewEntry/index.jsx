import React from 'react'

export default function NewEntry() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

  return (
    <div className='new-entry-container'>
        <h1>New Entry</h1>
        <form onSubmit={handleSubmit} className='new-transaction-form'>
            <div className='form-input-containers'>
                <label htmlFor="transaction-name">Transaction</label>
                <input type="text" id='transaction-name' />
            </div>
            <div className='form-input-containers'>
                <label htmlFor="transaction-name">Amount</label>
                <input type="text" id='transaction-name' />
            </div>
            <div className='form-input-containers'>
                <label htmlFor="transaction-name">Category</label>
                <input type="text" id='transaction-name' />
            </div>
            <button id='new-entry-submit-btn'>Add!</button>
        </form>
    </div>
  )
}

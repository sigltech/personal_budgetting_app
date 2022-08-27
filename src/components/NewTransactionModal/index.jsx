/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import Typography from '@mui/material/Typography';
import { FormControl, Box, Modal, TextField, Button, InputLabel, Select, MenuItem } from '@mui/material';


export default function NewTransactionModal({ ModalOpen, setModalOpen, setTransactionName, setTransactionAmount, setTransactionCategory, setTransactionDate, setTransactionList, transactionName, transactionAmount, transactionCategory, transactionDate }) {

    const handleClose = () => setModalOpen(false);

    const handleChangeName = (e) => {
        setTransactionName(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeAmount = (e) => {
        setTransactionAmount(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setTransactionCategory(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeDate = (e) => {
        setTransactionDate(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        setModalOpen(false);
        setTransactionList(prev => [...prev, { name: transactionName, amount: transactionAmount, category: transactionCategory, date: transactionDate }])
    }

    return (
        <Modal
            className='modal'
            open={ModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
      >
            <Box className='modal-content-container'>
                <Box className='modal-internal-container'>
                    <span id='close-modal' onClick={handleClose}>x</span>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new transaction
                    </Typography>
                    <FormControl>
                        <TextField
                            onChange={handleChangeName}
                            css={{
                                color:'white',
                                '&::placeholder': {
                                    color: 'white !important',
                                }
                            }}
                            label='Transaction name' 
                            type="text"
                            placeholder='Title'
                            />
                        <TextField
                            onChange={handleChangeAmount}
                            css={{
                                color:'white'
                            }}
                            label='Amount' 
                            type="number"
                            placeholder='Amount'
                            />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={transactionCategory}
                            onChange={handleChangeCategory}
                            label="Category"
                        >
                            <MenuItem value={'rent'}>Rent</MenuItem>
                            <MenuItem value={'shopping'}>Shopping</MenuItem>
                            <MenuItem value={'Transportation'}>Transportation</MenuItem>
                            <MenuItem value={'groceries'}>Groceries</MenuItem>
                            <MenuItem value={'food'}>Food</MenuItem>
                            <MenuItem value={'utilities'}>Utilities</MenuItem>
                            <MenuItem value={'clothing'}>Clothing</MenuItem>
                            <MenuItem value={'carPayments'}>Car Payments</MenuItem>
                            <MenuItem value={'pets'}>Pets</MenuItem>
                            <MenuItem value={'insurance'}>Insurance</MenuItem>
                            <MenuItem value={'memberships'}>Memberships</MenuItem>
                            <MenuItem value={'debt'}>Debt</MenuItem>
                            <MenuItem value={'savings'}>Savings</MenuItem>
                            <MenuItem value={'education'}>Education</MenuItem>
                            <MenuItem value={'entertainment'}>Entertainment</MenuItem>
                            <MenuItem value={'giftsDonations'}>Gifts/Donations</MenuItem>
                        </Select>
                        <TextField
                            onChange={handleChangeDate}
                            css={{
                                color:'white'
                            }}
                            type="date"
                            placeholder='Date'
                            />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                        >
                                Add
                        </Button>
                    </FormControl>

                </Box>
            </Box>
      </Modal>
    )
}

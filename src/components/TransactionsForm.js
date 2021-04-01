import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';

const TransactionsForm = props => {

    const onSubmit = async (data) => {
        console.log(data.address)
        console.log(data.blockNumber)

        try{
            const response = await fetch('http://localhost:5000/api/explorer/wallet/'+ data.address +'/blockNumber/'+ data.number, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(data =>  props.filterTransactions(data));
        }
        catch (err){
            console.log(err);
        }
    }
    
    const {register, handleSubmit} = useForm();

    return(
        <Form className='transactionsForm' onSubmit={handleSubmit(onSubmit)}>
            <h2>Check transactions for wallet</h2>
        <Form.Group className='input1'>
            <Form.Label>Wallet addess:</Form.Label>
            <input type='text' placeholder="Enter address" name='address' ref={register}></input>
        </Form.Group>

        <Form.Group className='input1'>
            <Form.Label>From block number:</Form.Label>
            <input type='number' placeholder="Enter block number" name='number' ref={register}></input>
        </Form.Group>

        <Button className='searchBtn2' variant="primary" type="submit">
            Search
        </Button>
        </Form>
    );
};  

export default TransactionsForm;
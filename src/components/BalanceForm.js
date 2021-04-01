import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import {useForm} from 'react-hook-form';
import Web3 from 'web3';
import '../App.css';

import 'react-datepicker/dist/react-datepicker.css';

const BalanceForm = props => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [enteredAddress, setEnteredAddress] = useState(null)
    const [ethBalance, setEthBalance] = useState(null)

    let web3
  

    useEffect(() => {
        if (window.ethereum) {
            //test
            web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }
    }, [])
    
    let ethAmount;
    const onSubmit = async (data) => {
        setEnteredAddress(data.address)
        setSelectedDate(selectedDate)
        console.log(selectedDate)

        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }
        
        try{
            const response = await fetch('http://localhost:5000/api/explorer/balance/'+ selectedDate, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(res =>  {
                console.log(enteredAddress);
                
                
                web3.eth.getBalance(data.address, res, function(err, result) {
                if (err) {
                console.log(err)
                } else {
                ethAmount = web3.utils.fromWei(result, "ether")
                console.log(ethAmount)
                setEthBalance(ethAmount)
                }
                })
            });
        }
        catch (err){
            console.log(err);
        }
    }
    
    const {register, handleSubmit} = useForm();

    return(
        <div className='balanceForm'>
            <h2>Check ETH balance</h2>
        <Form className='search-form' onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Group className='input1'>
            <Form.Label className='label1'>Wallet addess:</Form.Label>
            <input type='text' placeholder="Enter address" name='address' ref={register}></input>
        </Form.Group>

        <Form.Group className='input2'>
            <Form.Label className='label2'>From Date:</Form.Label>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} ref={register}/>
        </Form.Group>

        <Button className='searchBtn1' variant="primary" type="submit">
            Search
        </Button>
        </Form>

        <h4>Balance in ETH will display here: {ethBalance}</h4>
        </div>
        
    );
};  

export default BalanceForm;
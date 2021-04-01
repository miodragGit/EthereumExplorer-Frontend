import React from 'react';

import TransactionItem from './TransactionItem'

import '../App.css';

const TransactionsList = props => {
    return(
        <div className="transactionsList">
            <h3>Transactions will display here:</h3>
        <table>
                <tr>
                <th>From</th>
                <th>To</th>
                <th>Amount in ETH</th>
                </tr>
            {props.items.map(transaction => (
           <TransactionItem                    
               from ={transaction.from} 
               to = {transaction.to}
               value2 = {transaction.value}
           />
            ))}
        </table>
        </div>
    );
};  

export default TransactionsList;
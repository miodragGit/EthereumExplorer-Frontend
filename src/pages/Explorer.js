import React, { useState, useEffect } from 'react';
import TransactionsForm from '../components/TransactionsForm';

import TransactionsList from '../components/TransactionsList';
import BalanceForm from '../components/BalanceForm';

const Explorer = () => {
    const [transactions, setTransactions] = useState([]);

    const filterTransactions = (response) => {
        setTransactions(response.result);
    }

    return(
        <div>
            <BalanceForm />
            <TransactionsForm filterTransactions={filterTransactions}/>
            <TransactionsList items = {transactions} />
        </div>
    );
};  

export default Explorer;
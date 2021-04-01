import React from 'react';

const TransactionsItem = props => {
    return(
        <tr>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{props.value2 / 1000000000000000000}</td>
        </tr>
    );
};  

export default TransactionsItem;
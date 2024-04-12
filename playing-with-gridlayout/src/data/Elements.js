const elements = [
    'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount',
    'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
    'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo'
];

export const getLayout = () => {
    return elements.map((e, i) => {
        return {
            i: i,
            x: i,
            y: 0,
            w: 1,
            h: 1
        }
    });
}


export const getCards = () => {
    return elements.map((name, index) => <div className="card" key={index}>{name}</div>);
}


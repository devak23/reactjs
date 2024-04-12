const elements = [
    'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount',
    'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
    'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo'
];

const Card = (name, index) => <div className="card" key={index}>{name}</div>

const cards = [
    elements.map((e, i) =>  <Card name={e} index={i} />)
]


export const getLayout = () => {
    return [
        cards.map((e, i) => {
            return {
                i: i,
                x: i - 1,
                y: 0,
                w: 1,
                h: 1
            }
        })
    ];
}

export const getCards = () => {
    return cards;
}

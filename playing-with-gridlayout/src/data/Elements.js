const elements = [
  'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount', 'Advice Name',
  'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
  'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo', 'Client Logo'
];

export const getElements = () => elements

export const getLayout = (elements) => {
  return elements && elements.map((e, i) => {
    return {
      i: e.name,
      x: i,
      y: 0,
      w: 1,
      h: 1
    }
  });
}

export const getCards = (elements, className) => {
  return elements && elements.map((e, index) =>
    <div className={className ? className : 'card'}
         style={{width: 25}}
         key={index}>{e.name}
    </div>);
}
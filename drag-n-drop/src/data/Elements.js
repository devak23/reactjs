import Card from "../components/Card";

const elements = [
  'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount', 'Advice Name',
  'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
  'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo', 'Client Logo'
];

export const getElements = () => elements


export const getCards = (elements) => {
  return elements && elements.map((element, index) => <Card key={index} element={element}/>);
}

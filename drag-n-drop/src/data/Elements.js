import ReportField from "../components/ReportField";

const elements = [
  'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount', 'Advice Name',
  'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
  'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo', 'Client Logo'
];

export const getElements = () => elements


export const getCards = (elements) => {
  console.log("Elements.js: Generating Cards with elements: ", elements);
  return elements && elements.map(element => <ReportField key={element.id} element={element}/>);
}

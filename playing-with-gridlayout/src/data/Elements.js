import Card from "../components/Card2";

const elements = [
  'Bank Name', 'Bank Address', 'Branch Code', 'Description', 'Currency', 'Amount', 'Advice Name',
  'Transaction Date', 'Value Date', 'Account Number', 'B/O Customer', 'Payment Details', 'Chop', 'Bank Reference',
  'Transaction Type', 'Senders Reference', 'Sender Bank', 'Ordering Bank', 'Ordering Customer', 'Logo', 'Client Logo'
];

export const getElements = () => elements

export const getInitialLayout = (elements) => {
  return elements && elements.map((e, i) => {
    return {
      i: e.name,
      x: i,
      y: 0,
      w: 1,
      h: 1,
      isDraggable: true,
      isResizable: true
    }
  });
}


export const getCards = (elements, clazzName) => {
  return elements && elements.map((element, index) => <Card key={index} clazzName={clazzName}
                                                            element={element}/>);
}

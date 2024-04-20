import "./ReportField.css";

import {useDrag} from "react-dnd";
import {ItemTypes} from "../data/ItemTypes";

const ReportField = ({isDragging, item}) => {
  const [collected, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: isDragging ? {item} : null
  }));

  if (isDragging) {
    console.log("ReportField dragged: ", item);
  }


  console.log("ReportField.js: Before calling Render: ", item);

  return item && item.name && <div key={item.id} ref={drag} className="card inTransit"> {item.name}</div>;
}

export default ReportField
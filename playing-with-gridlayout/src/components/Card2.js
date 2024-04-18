import "./Card.css";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../data/ItemTypes";

const Card2 = ({isDragging, item}) => {
  const [_, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: isDragging ? {item} : null
  }));


  return (
    <div key={item.id} ref={drag} className="card inTransit"> {item.name}</div>
  );
}

export default Card2
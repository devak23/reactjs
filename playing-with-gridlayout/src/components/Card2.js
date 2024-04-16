import "./Card.css";
import {useDrag} from "react-dnd";
import ItemTypes from "../data/ItemTypes";

const Card2 = ({isDragging, item}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { item },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  );

  return (
    <div ref={dragRef} key={item.id} className="card inTransit"> {item.name}</div>
  );
}

export default Card2
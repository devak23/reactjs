import "./DesignArea.css";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../data/ItemTypes";
import {useEffect, useState} from "react";
import {getCards} from "../data/Elements";

const DesignArea = () => {
  const [selected, setSelected] = useState([]);
  const [{canDrop, isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => setSelected(!selected.includes(item) ? [...selected, item] : selected),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="designArea" ref={drop}>
      <span>Design Area</span>
      {getCards(selected)}
    </div>
  );
}

export default DesignArea;
import "./DesignArea.css";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../data/ItemTypes";
import {useEffect, useState} from "react";
import {getCards} from "../data/Elements";

const DesignArea = () => {
  const [selected, setSelected] = useState([]);
  const [{canDrop, isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => {
      console.log("DesignArea.js: dropping the item: ", item);
      setSelected(!selected.includes(item) ? [...selected, item] : selected)
    },
    //drop: (item) => console.log(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  useEffect(() => {
    console.log("DesignArea.js: selected got changed", selected);
  }, [selected]);

  console.log("DesignArea.js: Before calling Render");
  return (
    <div className="designArea" ref={drop}>
      <span>Design Area</span>
      {selected.length && getCards(selected)}
    </div>
  );
}

export default DesignArea;
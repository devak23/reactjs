import {useState} from "react";
import {getElements} from "../data/Elements";
import Card from "./Card";
import "./ConfigurationPanel.css";


const ConfigurationPanelWithElements = () => {
  const [items, setItems] = useState(getElements().map((e, index) => {
    return {id: index, name: e, checked: false}
  }));


  return (
    <div className="configurationPanel">
      <span><strong>Please select elements:</strong></span>
      <ul style={{marginTop: 20}}>
        {items.map(element => <Card key={element.id} isDragging={true} item={element}/>)}
      </ul>
    </div>
  );
}

export default ConfigurationPanelWithElements;
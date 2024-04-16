import "./ConfigurationPanel.css";
import {useState} from "react";
import {getElements} from "../data/Elements";
import Card2 from "./Card2";


const ConfigurationPanelWithElements = ({onItemSelected}) => {
  const [items, setItems] = useState(getElements().map((e, index) => {
    return {id: index, name: e, checked: false}
  }));

  return (
    <div className="configurationPanel">
      <span><strong>Please select elements:</strong></span>
      <ul style={{marginTop: 20}}>
        {items.map(e => <Card2 isDragging={true} item={e}/>)}
      </ul>
    </div>
  );
}

export default ConfigurationPanelWithElements;
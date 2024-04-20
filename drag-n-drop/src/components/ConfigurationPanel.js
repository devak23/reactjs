import {useState} from "react";
import {getElements} from "../data/Elements";
import ReportField from "./ReportField";
import "./ConfigurationPanel.css";


const ConfigurationPanelWithElements = () => {
  const [items, setItems] = useState(getElements().map((e, index) => {
    return {id: index, name: e}
  }));

  console.log("ConfigurationPanel.js: Before calling Render");
  return (
    <div className="configurationPanel">
      <span><strong>Please select elements:</strong></span>
      <ul style={{marginTop: 20}}>
        {items.map(element => <ReportField key={element.id} item={element}/>)}
      </ul>
    </div>
  );
}

export default ConfigurationPanelWithElements;
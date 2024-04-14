import "./ConfigurationPanel.css";
import {useState} from "react";
import {getElements} from "../data/Elements";

const CheckBox = ({item, onChange}) => {
  return (
    <>
      <input type="checkbox" key={item.id} name={item.name} checked={item.checked} onChange={(e) => onChange(item)}/>
      {item.name}
    </>
  );
}

const ConfigurationPanel = ({onItemSelected}) => {
  const [items, setItems] = useState(getElements().map((e, index) => {
    return {id: index, name: e, checked: false}
  }));

  const handleChange = (item) => {
    const index = items.map(i => i.id).indexOf(item.id);
    const post = items.splice(index + 1);
    const pre = items.splice(0, items.length - 1);

    let newValue = {id: item.id, name: item.name, checked: !item.checked};
    setItems([...pre, newValue, ...post]);

    onItemSelected(newValue);
  }

  return (
    <div className="configurationPanel">
      <span><strong>Please select elements:</strong></span>
      <ul style={{marginTop: 20}}>
        {items.map(e =>
          <li key={e.id}>
            <CheckBox item={e} onChange={handleChange}/>
          </li>)}
      </ul>
    </div>
  );
}

export default ConfigurationPanel;
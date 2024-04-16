import "./Card.css";

const Card = ({element, clazzName}) => <div className={clazzName ? clazzName : 'card'}>{element.name}</div>

export default Card;
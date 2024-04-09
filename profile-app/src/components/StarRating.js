import { FaStar } from "react-icons/fa";

const Star = ({ selected }) => {
  return <FaStar color={selected ? "green" : "grey"} />;
};

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(rating).keys()].map((key) => (
        <Star key={key} selected={true} />
      ))}
    </div>
  );
};

export default StarRating;

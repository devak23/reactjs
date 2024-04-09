import { FaStar } from "react-icons/fa";

const Star = ({ selected }) => {
  return <FaStar color={selected ? "green" : "#ccc"} />;
};

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5).keys()].map((key) => (
        <Star key={key} selected={key < rating ? true : false} />
      ))}
    </div>
  );
};

export default StarRating;

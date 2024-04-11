import "./Profile.css";
import FlipCard from "./hoc/FlipCard";

import StarRating from "./StarRating";
import {useState} from "react";

const ProfileInfo = ({profile, onProfileUpdate}) => (
  <div className="profile fade">
    <span>
      <img src={profile.image} alt="" width="170" height="150"/>
    </span>
    <span>
      <StarRating rating={profile.rating}/>
    </span>
    <span>
      {profile.name} ({profile.level})
    </span>
    <span>
      {profile.sid} ({profile.bloodGroup})
    </span>
    <span>{profile.email}</span>
  </div>
);

const ProfileForm = ({profile, onProfileUpdate}) => {
  const [level, setLevel] = useState(profile.level);
  const [bloodGroup, setBloodGroup] = useState(profile.bloodGroup);
  const [rating, setRating] = useState(profile.rating);

  const handleUpdate = () => {
    const data = {
      ...profile,
      level: level,
      bloodGroup: bloodGroup,
      rating: rating
    }
    onProfileUpdate(data);
  }
  return (
    <div className="profile editProfile">
      <span><strong>{profile.name}</strong></span>
      <span>
        Level:
        <input type="text"
                      placeholder="Enter level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
        />
      </span>
      <span>
        Blood Group:
        <input type="text"
               placeholder="Enter blood group"
               value={bloodGroup}
               onChange={(e) => setBloodGroup(e.target.value)}
        />
      </span>
      <span>
        Rating:
        <input type="text"
               placeholder="Enter Rating"
               value={rating}
               onChange={(e) => setRating(e.target.value)}
        />
      </span>
      <span>
        <button onClick={handleUpdate}> Save </button>
      </span>
    </div>
  );
};

export default FlipCard(ProfileInfo, ProfileForm);

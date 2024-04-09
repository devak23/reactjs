import "./Profile.css";
import StarRating from "./StarRating";

const Profile = ({ profile }) => (
  <div className="profile fade">
    <span>
      <img src={profile.image} alt="" width="170" height="150" />
    </span>
    <span>
      <StarRating rating={profile.rating} />
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

export default Profile;

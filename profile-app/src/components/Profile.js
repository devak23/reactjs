import "./Profile.css";

const Profile = ({ profile }) => (
  <div className="profile fade">
    <img src={profile.image} alt="" width="170" height="150" />
    <p>Name: {profile.name}</p>
    <p>
      SID: {profile.sid} Level: {profile.level}
    </p>
  </div>
);

export default Profile;

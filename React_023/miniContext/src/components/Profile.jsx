import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div className="mt-10">Login first</div>;

  return (
    <div className="mt-10">
      <h3>Welcome {user}</h3>
    </div>
  );
};

export default Profile;

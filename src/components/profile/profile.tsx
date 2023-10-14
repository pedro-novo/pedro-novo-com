import React from "react";
import ProfileImage from "./profile-image";
import ProfileDetails from "./profile-details";

const Profile: React.FC = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-between lg:flex-row">
        <ProfileImage />
        <ProfileDetails />
      </div>
    </section>
  );
};

export default Profile;

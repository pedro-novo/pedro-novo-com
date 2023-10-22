import React from "react";
import ProfileImage from "./profile-image";
import ProfileDetails from "./profile-details";

const Profile: React.FC = () => {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 pt-12 lg:px-8 lg:grid-cols-2">
        <ProfileImage />
        <ProfileDetails />
      </div>
    </section>
  );
};

export default Profile;

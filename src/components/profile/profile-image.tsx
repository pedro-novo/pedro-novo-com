/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <img
      src="https://media.licdn.com/dms/image/C4E03AQGKj28vvVC_6g/profile-displayphoto-shrink_400_400/0/1570056222551?e=1703721600&v=beta&t=eHW3WVOtyBDMeKgRRsB63bh3rbhAS2QES5inTO41PNE"
      alt="profile"
      className="inline-block w-[200px] h-[200px] rounded-full dark:border-2 dark:border-gray-600"
    />
  );
};

export default ProfileImage;

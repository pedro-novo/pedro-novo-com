/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <img
      src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
      alt="profile"
      className="inline-block w-[200px] h-[200px] rounded-full"
    />
  );
};

export default ProfileImage;

import Image from "next/image";
import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <Image
      src="/pedro-novo.jpg"
      alt="Pedro Novo"
      width={200}
      height={200}
      className="inline-block w-full max-w-xl rounded-full"
    />
  );
};

export default ProfileImage;

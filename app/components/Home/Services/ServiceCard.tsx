import Image from "next/image";
import React from "react";


type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="bg-[#111827] p-6 rounded-xl">
      <Image src={icon} alt={name} width={60} height={60} />

      <h2 className="mt-5 text-2xl font-bold text-white">
        {name}
      </h2>

      <p className="mt-4 text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
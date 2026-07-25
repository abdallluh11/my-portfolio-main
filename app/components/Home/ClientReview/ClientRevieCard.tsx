import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ClientRevieCard = ({ image, name, role }: Props) => {
  return (
    <div className="m-2 text-left">
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi
        repellat veniam ratione perspiciatis ut rem reprehenderit commodi
        officia doloribus &quot;
      </p>
      <h1 className="mt-6 text-cyan-300 font-bold text-lg">{name}</h1>
      <p className="text-gray-300 text-sm">{role}</p>
    </div>
  );
};

export default ClientRevieCard;
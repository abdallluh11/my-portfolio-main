import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/app/constant/services";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Building Modern <br /> Web Solutions
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <ServiceCard
              icon={service.icon}
              name={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
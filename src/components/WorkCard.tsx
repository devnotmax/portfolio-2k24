import React from "react";

interface WorkCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
  logo?: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  company,
  position,
  period,
  description,
  technologies = [],
  logo = "/placeholder-company.png",
}) => {
  return (
    <div className="bg-[#1e293b] shadow-lg rounded-lg p-6 flex flex-col w-full max-w-md hover:transform hover:scale-105 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4 flex items-center justify-center">
          <img src={logo} alt={`${company} logo`} className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <h4 className="text-lg font-semibold text-gray-300">{position}</h4>
          <p className="text-sm text-gray-400">{period}</p>
        </div>
      </div>

      <p className="text-gray-300 my-4">{description}</p>

      <div className="mt-auto">
        <h5 className="text-sm font-semibold text-gray-400 mb-2">
          Tecnologías utilizadas:
        </h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[var(--primary-color)] text-white px-2 py-1 rounded opacity-80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

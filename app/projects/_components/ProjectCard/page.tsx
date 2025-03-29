const ProjectCard = ({ title, description, imgSrc, reverse }: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 w-full items-center md:items-start md:text-left rounded-lg p-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-[400px] flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          className="object-scale-down w-full md:w-[400px] h-[200px] rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-3 w-full max-w-[600px] text-center md:text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

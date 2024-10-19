// ProjectCard.js
const ProjectCard = ({ title, description, imgSrc, reverse } : any) => {
    return (
      <div className={`flex gap-[150px] w-full justify-between ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-l">{description}</div>
        </div>
        <div className="flex justify-center items-center min-w-[400px] h-[200px] overflow-hidden">
          <img 
            src={imgSrc} 
            alt={title} 
            className=" object-cover w-auto h-[200px]" 
          />
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  
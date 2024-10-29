// ProjectsPage.js
import ProjectCard from "./_components/ProjectCard/page";

const projects = [
  {
    title: "E-Commerce Application - Full-Stack Project",
    description:
      "A fully functional e-commerce platform modeled after modern online shopping websites like Amazon. This project showcases my skills in full-stack development, with a React.js front end and Spring Boot microservices for the back end. The application includes features like user authentication, product listings, shopping carts, order management, and payment processing. The back-end system is powered by a RESTful API, Kafka for message-driven services, and Kubernetes for container orchestration. This project highlights my ability to design scalable systems and integrate complex features into a seamless user experience.",
    imgSrc: "/ecommerce.png",
  },
  {
    title: "Buy Indicator for Stocks",
    description: "This project involves building a Buy Indicator System for stocks in my portfolio, using a combination of financial metrics and valuation techniques.",
    imgSrc: "/market.jpg",
  },
  {
    title: "Snake game from old Nokia phones",
    description:
      "This project recreates the classic Snake Game from old Nokia phones, using HTML5 Canvas. The game allows players to control a growing snake as it eats food to increase its size while avoiding collision with its own body. This project showcases my ability to work with Canvas API for 2D game development, and implement classic game mechanics, including player controls, score tracking, and collision detection. It was a great way to strengthen my knowledge of JavaScript and handling real-time updates on the canvas.",
    imgSrc: "/nokia.png",
  },
  {
    title: "Mario-Inspired Platformer Game - Canvas Project",
    description:
      "A Mario-like platformer game developed using HTML5 Canvas and JavaScript, where players navigate through multiple levels filled with obstacles, enemies, and collectible items. This project emphasizes physics-based interactions, such as jumping, gravity, and collision detection. Through this project, I honed my skills in building game mechanics like character movement, level design, and animations on a 2D canvas. The game features retro-style pixel art to create a nostalgic experience, similar to the original Mario games.",
    imgSrc: "/mario.png",
  },
  // {
  //   title: "Tank Battle Game - Canvas Project",
  //   description:
  //     "This project is a 2D tank battle game developed using HTML5 Canvas and JavaScript, inspired by classic arcade tank games. Players control a tank, maneuvering through a battlefield while shooting at enemies. The game features real-time physics, bullet trajectories, and enemy AI. I used Canvas API to create smooth animations, collision detection, and player interactions. This project was instrumental in deepening my understanding of game logic, state management, and rendering graphics efficiently on a 2D canvas.",
  //   imgSrc: "/tank.png",
  // },
  // Add more projects as needed...
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-[32px] min-h-[700px] w-[1040px] py-[32px] overflow-y-scroll">
      <div>
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      {/* Loop through the projects array */}
      <div className="flex flex-col gap-[50px] w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            reverse={index % 2 !== 0} // Alternate layout for even/odd rows
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

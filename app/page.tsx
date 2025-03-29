import Profile from "../public/profile-pic.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[48px] justify-between max-w-[1040px] mx-auto py-12 px-6">
      {/* Left Section */}
      <div className="flex-1 ">
        <div>
          <div className="text-3xl sm:text-4xl font-bold">Hey, I am Aniruddha</div>
        </div>
        <div className="pt-4 sm:pt-6 text-lg sm:text-[22px] leading-7 sm:leading-8">
          <ul className="list-disc pl-4 sm:pl-6 mt-4 flex flex-col gap-3 sm:gap-4">
            <li>
              <strong> 👨‍💻 I&apos;m a passionate software engineer</strong> with expertise in full-stack development.
            </li>
            <li>
              🏙 <strong>I love building</strong> web applications and tools that make life easy.
            </li>
            <li>🎥 <strong>Learn alongside me</strong> as I explore the world of software.</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex flex-1 justify-center">
        <Image
          src={Profile}
          className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[350px] rounded-lg object-cover object-top"
          alt="Aniruddha Deshmukh"
        />
      </div>
    </div>
  );
}
